from typing import Dict, List

class StudyAgent:
    def __init__(self, api_key: str):
        import google.generativeai as genai
        genai.configure(api_key="AIzaSyA2y_gWgk4cT-oxhGXEwffbIlOSoz0Cmd4")
        self.model = genai.GenerativeModel("models/gemini-2.5-flash")

    async def process_content(self, text: str) -> Dict:
        concepts_prompt = "Extract 7-10 key concepts from the following text in bullet points:\n" + text
        concepts_resp = self.model.generate_content(concepts_prompt)
        concepts = self._parse_concepts(concepts_resp.text)

        flashcard_prompt = "Create 5 flashcards (question-answer pairs) from the following text:\n" + text
        flashcard_resp = self.model.generate_content(flashcard_prompt)
        flashcards = self._parse_flashcards(flashcard_resp.text)

        mcq_prompt = "Generate 5 multiple choice questions with 4 options each from the following text. Mark the correct answer with an asterisk (*):\n" + text
        mcq_resp = self.model.generate_content(mcq_prompt)
        mcqs = self._parse_mcqs(mcq_resp.text)

        return {
            "concepts": concepts,
            "flashcards": flashcards,
            "mcqs": mcqs
        }

    def _parse_concepts(self, text: str) -> List[str]:
        return [line.strip('- ') for line in text.split('\n') if line.strip()]

    def _parse_flashcards(self, text: str) -> List[Dict]:
        cards = []
        lines = text.split('\n')
        current_q = None
        for line in lines:
            if line.startswith('Q:'):
                current_q = line[2:].strip()
            elif line.startswith('A:') and current_q:
                cards.append({
                    "question": current_q,
                    "answer": line[2:].strip()
                })
                current_q = None
        return cards

    def _parse_mcqs(self, text: str) -> List[Dict]:
        mcqs = []
        lines = text.split('\n')
        current_mcq = {}
        for line in lines:
            if line.strip().startswith('Q'):
                if current_mcq:
                    mcqs.append(current_mcq)
                current_mcq = {
                    "question": line.split('.', 1)[1].strip() if '.' in line else line.strip(),
                    "options": [],
                    "correct": None
                }
            elif line.strip().startswith(('A)', 'B)', 'C)', 'D)')):
                option = line.strip()
                if '*' in option:  # Marked as correct
                    current_mcq["correct"] = option[0]
                    option = option.replace('*', '').strip()
                current_mcq["options"].append(option)
        if current_mcq:
            mcqs.append(current_mcq)
        return mcqs