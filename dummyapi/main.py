import random
from fastapi import FastAPI
from datetime import datetime, timedelta


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/temperature")
async def temperatur():
    N = 100
    data = [round(random.gauss(15, sigma=3), 2) for i in range(N)]
    dates = [datetime.now().replace(minute=0, microsecond=0, second=0) - timedelta(hours=i) for i in range(N)]
    return {"dates": dates, "temperature": data}