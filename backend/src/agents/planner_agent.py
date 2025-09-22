import json

class PlannerAgent:
    def generate_study_plan(self, topics):
        study_plan = {"schedule": []}
        days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        
        for i, topic in enumerate(topics):
            day = days[i % len(days)]
            time = f"{9 + (i % 3)}:00 AM"  # Just an example to vary the time
            duration = "2 hours" if i % 2 == 0 else "1 hour"
            study_type = "study"
            
            study_plan["schedule"].append({
                "time": time,
                "subject": topic,
                "duration": duration,
                "type": study_type
            })
        
        return json.dumps(study_plan, indent=4)