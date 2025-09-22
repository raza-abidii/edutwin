import openai

class CodeExplanationAgent:
    """
    Agent that explains code in any language and provides starter programs using ChatGPT LLM.
    """
    def __init__(self, openai_api_key: str):
        openai.api_key = openai_api_key

    def explain_code(self, code: str, language: str) -> str:
        prompt = f"""
        Explain the following {language} code in simple terms for a beginner:
        \n{code}\n
        Give a step-by-step explanation and highlight the main concepts used.
        """
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message['content'].strip()

    def starter_program(self, language: str, concept: str = None) -> str:
        concept_text = f" that demonstrates {concept}" if concept else ""
        prompt = f"""
        Write a simple starter program in {language}{concept_text}. Add comments to explain each part.
        """
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        return response.choices[0].message['content'].strip()

# Example usage:
# agent = CodeExplanationAgent(openai_api_key="YOUR_API_KEY")
# explanation = agent.explain_code('print("Hello, World!")', 'Python')
# starter = agent.starter_program('JavaScript', 'loops')
# print(explanation)
# print(starter)
