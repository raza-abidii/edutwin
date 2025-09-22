from fastapi import FastAPI, UploadFile, File
from src.utils.pdf_parser import extract_text_from_pdf
from src.exam import predict_exam
import tempfile
from fastapi.middleware.cors import CORSMiddleware
import PyPDF2
import os

def extract_text_from_pdf(pdf_path: str) -> str:
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() or ""
    return text

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/planner-agent")
async def planner_agent(file: UploadFile = File(...)):
    print(f"Received file: {file.filename}")
    save_path = f"./uploads/{file.filename}"  

    os.makedirs("./uploads", exist_ok=True)

    with open(save_path, "wb") as buffer:
        buffer.write(await file.read())
    txt = extract_text_from_pdf(save_path)
    print(txt)
    return {"message": f"File saved to {save_path}"}


@app.post("/generate-exam")
async def generate_exam(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        tmp.write(await file.read())
        tmp_path = tmp.name

    syllabus_text = extract_text_from_pdf(tmp_path)

    # Save parsed text to a .txt file
    with open("./uploads/parsed_text.txt", "w") as text_file:
        text_file.write(syllabus_text)

    exam_result = predict_exam(syllabus_text)
    return exam_result

<<<<<<< Updated upstream
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
=======
@app.post("/study-agent")
def study_agent():
    with open("./uploads/parsed_text.txt", "r") as text_file:
        syllabus_text = text_file.read()

    # TODO: Pass syllabus_text to your study agent logic
    # For example:
    result = process_study_agent(syllabus_text)
    return {"study_material": result}

    # For now, just return the text
    return {"syllabus_text": syllabus_text}

def process_study_agent(syllabus_text: str):
    # Dummy implementation, replace with your actual logic
    return f"Processed study material for: {syllabus_text[:50]}..."

>>>>>>> Stashed changes
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8082)

