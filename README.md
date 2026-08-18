# 🚀 Kanniyappa Ranjith M — Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19.x-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" />
</p>

A modern, high-performance, mobile-first **Full-Stack Developer Portfolio** built for **Kanniyappa Ranjith M** — Computer Science & Engineering undergraduate (AI & Machine Learning) at **PES University**, Bengaluru.

---

## ✨ Features

- 🎨 **Modern Cyber-Slate Aesthetic**: Glassmorphism card surfaces, ambient neon glows (cyan `#00f0ff` & purple `#a855f7`), and custom scrollbars.
- 📱 **Mobile-First Responsiveness**: Tailored fluid typography (`clamp()`), touch-friendly targets, and an animated mobile navigation drawer.
- ⚡ **Dynamic Hero Experience**: Rotating typewriter role titles, pulsing status badge, and glowing profile avatar with spinning cyber aura.
- 🛠️ **Categorized Skills**: 5 comprehensive categories (*Languages, Frontend, Backend, AI/ML & Data Science, Developer Tools*) with interactive hover glows.
- 📂 **Filtered Projects Showcase**: Filter projects by domain (*All, AI & Machine Learning, Full-Stack Web, Java & Systems*) with direct GitHub repo links.
- 🎓 **Education & Background Timeline**: Interactive vertical timeline detailing academic journey (*PES University, St. Joseph's Pre-University College, MMET English High School*).
- 📬 **Live Contact Backend**: Interactive contact form connected to an Express + MongoDB database with real-time validation and submission alerts.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, HTML5, Modern CSS3 (Flexbox/Grid, CSS Variables, Glassmorphism) |
| **Icons & Fonts** | Lucide React, Plus Jakarta Sans, JetBrains Mono |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Deployment** | Vercel (Frontend), Render (Backend API) |

---

## 📁 Project Structure

```bash
Portfolio_KR/
├── client/                     # Frontend Application (React + Vite)
│   ├── public/
│   │   └── assets/             # Images, resume PDF, and icons
│   │       ├── profile.jpg
│   │       ├── resume.pdf
│   │       └── favicon.svg
│   ├── src/
│   │   ├── App.jsx             # Main interactive portfolio component
│   │   ├── App.css             # Modern cyber-slate responsive stylesheet
│   │   ├── index.css           # Global resets and CSS custom properties
│   │   └── main.jsx            # Application entry point
│   ├── index.html              # HTML template with Google Fonts & metadata
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend API (Node.js + Express + MongoDB)
│   ├── models/
│   │   └── Message.js          # Mongoose schema for contact inquiries
│   ├── .env                    # Environment variables (MONGO_URI, PORT)
│   ├── server.js               # Express server entry point & API routes
│   └── package.json
│
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.x or higher recommended)
- **npm** (v9.x or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/kr200360/Portfolio_KR.git
cd Portfolio_KR
```

### 2. Frontend Setup (Client)
```bash
cd client
npm install
npm run dev
```
👉 Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Backend Setup (Server)
In a second terminal window:
```bash
cd server
npm install
npm start
```
👉 Backend server runs on [http://localhost:5000](http://localhost:5000).

---

## 🌐 Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 🚢 Deployment

- **Frontend**: Deploy `client/` to [Vercel](https://vercel.com) (Framework: Vite, Build command: `npm run build`, Output: `dist`).
- **Backend**: Deploy `server/` as a Web Service on [Render](https://render.com) with the `MONGO_URI` environment variable.

---

## 📬 Connect with Me

- **LinkedIn:** [kanniyappa-ranjith-m](https://www.linkedin.com/in/kanniyappa-ranjith-m-1937bb287/)
- **GitHub:** [@kr200360](https://github.com/kr200360)
- **Email:** [kanniyapparanjithm987@gmail.com](mailto:kanniyapparanjithm987@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

