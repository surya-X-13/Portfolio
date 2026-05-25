from fastapi import FastAPI, Request, HTTPException, BackgroundTasks
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

app = FastAPI(title="Suryadip's Portfolio Backend")

# Enable CORS for frontend API calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the static files directory
app.mount("/static", StaticFiles(directory="static"), name="static")

# Setup Jinja2 templates directory
templates = Jinja2Templates(directory="templates")

# Pydantic schema for robust data validation
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

# ─── Routes ───────────────────────────────────────────────────────────────────

@app.get("/")
async def index(request: Request):
    """Serve the portfolio main page using Jinja2."""
    return templates.TemplateResponse("index.html", {"request": request})


def send_email_task(name: str, email: str, message: str):
    """Asynchronous background task to send an email via Gmail SMTP."""
    print(f"\n[{datetime.now()}] 📬 New Contact Message (FastAPI Background Task)")
    print(f"  From   : {name} <{email}>")
    print(f"  Message: {message}\n")

    sender_user = os.environ.get("GMAIL_USER")
    sender_pass = os.environ.get("GMAIL_PASS")
    recipient   = os.environ.get("RECIPIENT_EMAIL", sender_user)

    if sender_user and sender_pass:
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = f"Portfolio Contact: {name}"
            msg["From"]    = sender_user
            msg["To"]      = recipient

            body = f"""
New message from your portfolio:

Name    : {name}
Email   : {email}
Message :
{message}
"""
            msg.attach(MIMEText(body, "plain"))

            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(sender_user, sender_pass)
                server.sendmail(sender_user, recipient, msg.as_string())
            print("[Email Sent] SMTP dispatch completed successfully.")
        except Exception as exc:
            print(f"[Email Error] SMTP dispatch failed: {exc}")


@app.post("/api/contact")
async def contact(form: ContactForm, background_tasks: BackgroundTasks):
    """Handle contact form submissions securely and asynchronously."""
    name    = form.name.strip()
    email   = form.email.strip()
    message = form.message.strip()

    if not name or not email or not message:
        raise HTTPException(status_code=422, detail="All fields are required.")

    # Execute email transmission inside a background task
    # This guarantees a rapid 200 response back to the client immediately
    background_tasks.add_task(send_email_task, name, email, message)

    return {"success": True, "message": "Message received! I'll get back to you soon."}


@app.get("/api/projects")
async def projects():
    """Return project catalog data as JSON."""
    data = [
        {"id": 1, "title": "NeuralCore AI", "category": "AI",
         "tags": ["Python", "TensorFlow", "Pandas"],
         "img": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
         "desc": "A custom ML model for predictive analytics with Jupyter-based research.",
         "github": "#"},
        {"id": 2, "title": "DataLink SQL Engine", "category": "Web",
         "tags": ["PostgreSQL", "Node.js", "SQL"],
         "img": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
         "desc": "A high-performance query optimizer for relational databases.",
         "github": "#"},
        {"id": 3, "title": "DevFlow FullStack", "category": "Web",
         "tags": ["React", "Node.js", "MongoDB"],
         "img": "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800",
         "desc": "Enterprise project management tool with real-time collaboration features.",
         "github": "#"},
        {"id": 4, "title": "Algo-Viz 3D", "category": "DSA",
         "tags": ["Three.js", "C++", "WebAssembly"],
         "img": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
         "desc": "3D visualization of graph algorithms and dynamic programming state transitions.",
         "github": "#"},
        {"id": 5, "title": "Sentiment Bot", "category": "AI",
         "tags": ["NLTK", "Flask", "Python"],
         "img": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
         "desc": "Natural Language Processing tool to analyze customer feedback on scale.",
         "github": "#"},
        {"id": 6, "title": "SwiftCommerce", "category": "Web",
         "tags": ["Tailwind", "Firebase", "Redux"],
         "img": "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
         "desc": "Fast-loading e-commerce template optimized for core web vitals.",
         "github": "#"},
    ]
    return data
