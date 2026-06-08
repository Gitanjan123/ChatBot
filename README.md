# 🤖 AI ChatBot — LLM Powered Full Stack Application

A full-stack AI ChatBot application powered by a **Large Language Model (LLM)**.
Built with **Spring Boot** on the backend and **React.js + Tailwind CSS** on the frontend.

---

## 🚀 Tech Stack

### Backend

* ☕ **Java + Spring Boot** — REST API
* 🤖 **LLM Integration** — AI response generation
* 🔗 **Spring Web** — HTTP request handling

### Frontend

* ⚛️ **React.js** — Component-based UI
* 🎨 **Tailwind CSS** — Modern responsive styling
* 📡 **Axios / Fetch API** — Backend communication

---

## ✨ Features

* 💬 Real-time AI chat interface
* 🧠 LLM-powered intelligent responses
* 📱 Fully responsive design
* ⚡ Fast and clean UI with Tailwind CSS
* 🔄 RESTful API integration
* 🌐 Backend health monitoring
* 🕒 Chat history support
* 🎯 Modern chatbot UI experience

---

## 📁 Project Structure

```text
ChatBot/
│
├── backend/                 # Spring Boot Application
│   ├── src/
│   │   └── main/
│   │       ├── java/        # Controllers, Services
│   │       └── resources/   # application.properties
│   └── pom.xml
│
├── frontend/                # React + Tailwind Application
│   ├── src/
│   │   ├── components/      # Chat UI components
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

---

## 🖥️ Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies and run:

```bash
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## 🎨 Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

### Backend (`application.properties`)

Create:

```text
backend/src/main/resources/application.properties
```

Add:

```properties
LLM_API_KEY=your_api_key_here
```

---

### Frontend (`.env`)

Create:

```env
REACT_APP_API_URL=http://localhost:8080
```

---

## 🧪 API Endpoint

### Chat Endpoint

```http
POST /api/chat
```

Example Request:

```json
{
  "message": "Hello AI"
}
```

Example Response:

```json
{
  "reply": "Hello! How can I help you today?",
  "model": "gpt-4o-mini",
  "success": true
}
```

---

## 📸 Screenshots

Add screenshots here after deployment.

```text
frontend/public/screenshots/chat-ui.png
```

---

## 🛠️ Future Improvements

* 🔐 User authentication
* 💾 Persistent chat history
* 🌍 Multi-model AI support
* 📎 File upload support
* 🎙️ Voice assistant integration

---

## 👨‍💻 Author

**Gitanjan Debnath**

GitHub:
https://github.com/Gitanjan123

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐** on GitHub.
