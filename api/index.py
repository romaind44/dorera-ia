from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

def _payload():
    return {
        "statut": "Connecté",
        "message": "Application DoreArt-IA prête",
        "heure_serveur": datetime.now().strftime("%H:%M:%S"),
        "auteur": "Romain"
    }

@app.get("/hello")
def read_hello():
    return _payload()

@app.get("/api/hello")
def read_hello_with_api_prefix():
    return _payload()