import os
import google.generativeai as genai

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyA2y_gWgk4cT-oxhGXEwffbIlOSoz0Cmd4")
genai.configure(api_key=GEMINI_API_KEY)

class CodeExplanationAgent:
    def __init__(self, gemini_api_key: str):
        genai.configure(api_key=gemini_api_key)
        self.model = genai.GenerativeModel("gemini-2.5-flash")

    def explain_code(self, code: str, language: str) -> str:
        prompt = f"""
        Explain the following {language} code in simple terms for a beginner:
        \n{code}\n
        Give a step-by-step explanation and highlight the main concepts used.
        """
        response = self.model.generate_content(prompt)
        return response.text.strip()

    def starter_program(self, language: str, concept: str = None) -> str:
        concept_text = f" that demonstrates {concept}" if concept else ""
        prompt = f"""
        Write a simple starter program in {language}{concept_text}. Add comments to explain each part.
        """
        response = self.model.generate_content(prompt)
        return response.text.strip()

# Example usage:
# agent = CodeExplanationAgent(gemini_api_key="YOUR_GEMINI_API_KEY")
# explanation = agent.explain_code('print("Hello, World!")', 'Python')
# starter = agent.starter_program('JavaScript', 'loops')
# print(explanation)
# print(starter)
