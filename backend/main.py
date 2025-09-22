from fastapi import FastAPI, UploadFile, File
from src.utils.pdf_parser import extract_text_from_pdf
from src.exam import predict_exam
from src.agents.study_agent import StudyAgent
import tempfile
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2
import os
import shutil

def extract_text_from_pdf(pdf_path: str) -> str:
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() or ""
    return text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or ["http://localhost:8080"] for more security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GEMINI_API_KEY = "AIzaSyBe8HszOzRUlODdUJjEeQtKDsjznHb2bGE" 

@app.post("/study-agent")
async def study_agent(file: UploadFile = File(...)):
    save_path = f"./uploads/{file.filename}"
    os.makedirs("./uploads", exist_ok=True)
    with open(save_path, "wb") as buffer:
        buffer.write(await file.read())

    syllabus_text = extract_text_from_pdf(save_path)
    agent = StudyAgent(GEMINI_API_KEY)
    result = await agent.process_content(syllabus_text) 
    return result

@app.post("/planner-agent")
async def planner_agent(file: UploadFile = File(...)):
    print(f"Received file: {file.filename}")
    save_path = f"./uploads/{file.filename}"      
    os.makedirs("./uploads", exist_ok=True)

    with open(save_path, "wb") as buffer:
        buffer.write(await file.read())

    txt = extract_text_from_pdf(save_path)

    agent = StudyAgent(GEMINI_API_KEY)
    result = await agent.process_content(txt)
    
    return {"schedule": result.get("schedule")}

@app.post("/generate-exam")
async def generate_exam(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    syllabus_text = extract_text_from_pdf(tmp_path)
    with open("./uploads/parsed_text.txt", "w") as text_file:
        text_file.write(syllabus_text)

    exam_result = predict_exam(syllabus_text)
    return exam_result

@app.post("/code_agent")
async def code_agent(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    syllabus_text = extract_text_from_pdf(tmp_path)

    exam_result = predict_exam(syllabus_text)
    
    destination = f"./uploads/{file.filename}"
    shutil.copy(tmp_path, destination)

    return exam_result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8082)

