import random
import os
from typing import List, Union

from backend.src.utils.pdf_parser import extract_text_from_pdf

try:
    from PIL import Image
    import pytesseract

    OCR_AVAILABLE = True
except ImportError:
    OCR_AVAILABLE = False


class ExamPaperPredictionAgent:
    """
    MVP agent to generate a mock exam paper from syllabus topics.
    """

    def __init__(self, syllabus: Union[str, List[str], os.PathLike]):
        self.topics = []
        if isinstance(syllabus, (str, list)):
            # Split by lines or commas for basic topic extraction
            if isinstance(syllabus, str):
                if syllabus.lower().endswith(".pdf"):
                    self.topics = self._extract_topics_from_pdf(syllabus)
                elif syllabus.lower().endswith((".jpg", ".jpeg", ".png")):
                    self.topics = self._extract_topics_from_image(syllabus)
                else:
                    self.topics = [t.strip() for t in syllabus.split("\n") if t.strip()]
                    if len(self.topics) < 2:
                        self.topics = [t.strip() for t in syllabus.split(",") if t.strip()]
            else:
                self.topics = [t.strip() for t in syllabus if t.strip()]
        elif isinstance(syllabus, os.PathLike):
            path = str(syllabus)
            if path.lower().endswith(".pdf"):
                self.topics = self._extract_topics_from_pdf(path)
            elif path.lower().endswith((".jpg", ".jpeg", ".png")):
                self.topics = self._extract_topics_from_image(path)
        if not self.topics:
            self.topics = ["Topic 1", "Topic 2"]  # fallback

    def _extract_topics_from_pdf(self, pdf_path: str) -> List[str]:
        try:
            text = extract_text_from_pdf(pdf_path)
            return [t.strip() for t in text.split("\n") if t.strip()]
        except Exception:
            return []

    def _extract_topics_from_image(self, img_path: str) -> List[str]:
        if not OCR_AVAILABLE:
            return []
        try:
            img = Image.open(img_path)
            text = pytesseract.image_to_string(img)
            return [t.strip() for t in text.split("\n") if t.strip()]
        except Exception:
            return []

    def generate_short_questions(self, n=5) -> List[str]:
        selected = random.sample(self.topics, min(n, len(self.topics)))
        return [f"Define or explain: {topic}?" for topic in selected]

    def generate_long_questions(self, n=3) -> List[str]:
        selected = random.sample(self.topics, min(n, len(self.topics)))
        return [f"Discuss in detail: {topic}. Provide examples where applicable." for topic in selected]

    def generate_mock_exam(self) -> dict:
        return {
            "Part A": self.generate_short_questions(),
            "Part B": self.generate_long_questions(),
        }

    def format_exam_paper(self) -> str:
        exam = self.generate_mock_exam()
        output = ["Mock Exam Paper\n"]
        output.append("Part A: Short Answer Questions\n")
        for i, q in enumerate(exam["Part A"], 1):
            output.append(f"A{i}. {q}\n")
        output.append("\nPart B: Long Answer Questions\n")
        for i, q in enumerate(exam["Part B"], 1):
            output.append(f"B{i}. {q}\n")
        return "".join(output)
def predict_exam(syllabus_text: str) -> dict:
    # Replace this with your actual exam prediction logic
    return {
        "exam_paper": f"Predicted exam based on syllabus: {syllabus_text[:100]}..."
    }