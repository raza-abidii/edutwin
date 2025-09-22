from fastapi import APIRouter, Body
from pydantic import BaseModel
import os
from src.agents.code_agent import CodeExplanationAgent

router = APIRouter()

class ExplainCodeRequest(BaseModel):
    code: str
    language: str

class StarterProgramRequest(BaseModel):
    language: str
    concept: str = None

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "YOUR_API_KEY")
agent = CodeExplanationAgent(openai_api_key=OPENAI_API_KEY)

@router.post("/explain_code")
def explain_code(request: ExplainCodeRequest):
    explanation = agent.explain_code(request.code, request.language)
    return {"explanation": explanation}

@router.post("/starter_program")
def starter_program(request: StarterProgramRequest):
    starter = agent.starter_program(request.language, request.concept)
    return {"starter_program": starter}

@router.get("/agents")
def get_agents():
    # Example static data, replace with real agent data as needed
    return [
        {"id": 1, "name": "Study Agent", "description": "Helps with study planning."},
        {"id": 2, "name": "Notes Agent", "description": "Summarizes notes."},
        {"id": 3, "name": "Planner Agent", "description": "Organizes tasks."}
    ]
