from fastapi import APIRouter, Body
from pydantic import BaseModel
import os
import google.generativeai as genai

router = APIRouter()

class ExplainCodeRequest(BaseModel):
    code: str
    language: str

class StarterProgramRequest(BaseModel):
    language: str
    concept: str = None

genai.configure(api_key="AIzaSyA2y_gWgk4cT-oxhGXEwffbIlOSoz0Cmd4")
model="gemini-2.5-flash"

print(genai.list_models())

@router.post("/explain_code")
def explain_code(request: ExplainCodeRequest):
    prompt = f"Explain the following {request.language} code:\n{request.code}"
    response = model.generate_content(prompt)
    return {"explanation": response.text}

@router.post("/starter_program")
def starter_program(request: StarterProgramRequest):
    prompt = f"Write a starter program in {request.language} about {request.concept or 'basic concepts'}."
    response = model.generate_content(prompt)
    return {"starter_program": response.text}

@router.get("/agents")
def get_agents():
    return [
        {"id": 1, "name": "Study Agent", "description": "Helps with study planning."},
        {"id": 2, "name": "Notes Agent", "description": "Summarizes notes."},
        {"id": 3, "name": "Planner Agent", "description": "Organizes tasks."}
    ]
