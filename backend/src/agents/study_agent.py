from typing import Dict, List
from langchain_openai import ChatOpenAI
from langchain.prompts import HumanMessage, SystemMessage
from langchain.prompts.chat import ChatPromptTemplate

class StudyAgent:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4")
        
        self.concept_prompt = ChatPromptTemplate.from_messages([
            ("system", "Extract 7-10 key concepts from the given text in bullet points."),
            ("user", "{text}")
        ])
        
        self.flashcard_prompt = ChatPromptTemplate.from_messages([
            ("system", "Create 5 flashcards (question-answer pairs) from the text."),
            ("user", "{text}")
        ])
        
        self.mcq_prompt = ChatPromptTemplate.from_messages([
            ("system", "Generate 5 multiple choice questions with 4 options each. Mark correct answers."),
            ("user", "{text}")
        ])

    async def process_content(self, text: str) -> Dict:
        """Process study content and generate learning aids."""
        
        # Generate key concepts
        concept_chain = self.concept_prompt | self.llm
        concepts = await concept_chain.ainvoke({"text": text})
        
        # Generate flashcards
        flashcard_chain = self.flashcard_prompt | self.llm
        flashcards = await flashcard_chain.ainvoke({"text": text})
        
        # Generate MCQs
        mcq_chain = self.mcq_prompt | self.llm
        mcqs = await mcq_chain.ainvoke({"text": text})
        
        return {
            "concepts": self._parse_concepts(concepts.content),
            "flashcards": self._parse_flashcards(flashcards.content),
            "mcqs": self._parse_mcqs(mcqs.content)
        }
    
    def _parse_concepts(self, text: str) -> List[str]:
        """Parse bullet-pointed concepts into a list."""
        return [line.strip('- ') for line in text.split('\n') if line.strip()]
    
    def _parse_flashcards(self, text: str) -> List[Dict]:
        """Parse flashcard text into structured format."""
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
        """Parse MCQ text into structured format."""
        mcqs = []
        lines = text.split('\n')
        current_mcq = {}
        
        for line in lines:
            if line.strip().startswith('Q'):
                if current_mcq:
                    mcqs.append(current_mcq)
                current_mcq = {"question": line.split('.', 1)[1].strip(), "options": [], "correct": None}
            elif line.strip().startswith(('A)', 'B)', 'C)', 'D)')):
                option = line.strip()
                if '*' in option:  # Marked as correct
                    current_mcq["correct"] = option[0]
                    option = option.replace('*', '').strip()
                current_mcq["options"].append(option)
        
        if current_mcq:
            mcqs.append(current_mcq)
            
        return mcqs

# Usage example:
"""
study_agent = StudyAgent()
result = await study_agent.process_content(syllabus_text)

# Result format:
{
    "concepts": ["Concept 1", "Concept 2", ...],
    "flashcards": [
        {"question": "Q1", "answer": "A1"},
        ...
    ],
    "mcqs": [
        {
            "question": "What is...",
            "options": ["A) Option 1", "B) Option 2", "C) Option 3", "D) Option 4"],
            "correct": "B"
        },
        ...
    ]
}
"""