import random
from fastapi import FastAPI
from datetime import datetime, timedelta
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/temperature")
async def temperatur():
    N = 100
    data = [round(random.gauss(15, sigma=3), 2) for i in range(N)]
    dates = [datetime.now().replace(minute=0, microsecond=0, second=0) - timedelta(hours=i) for i in range(N)]
    return {"dates": dates, "temperature": data}