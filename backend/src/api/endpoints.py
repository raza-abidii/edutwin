from fastapi import APIRouter

router = APIRouter()

@router.get("/agents")
def get_agents():
    # Example static data, replace with real agent data as needed
    return [
        {"id": 1, "name": "Study Agent", "description": "Helps with study planning."},
        {"id": 2, "name": "Notes Agent", "description": "Summarizes notes."},
        {"id": 3, "name": "Planner Agent", "description": "Organizes tasks."}
    ]
