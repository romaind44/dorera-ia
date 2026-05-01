from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.get("/api/hello")
def read_root():
    return {
        "statut": "Connecté",
        "message": "Application DoreArt-IA prête",
        "heure_serveur": datetime.now().strftime("%H:%M:%S"),
        "auteur": "Romain"
    }