<div align="center">

# 🎮 Guess The Number

A full-stack number guessing web game built with **React**, a **Java REST API**, and **SQL**. Players race against a 60-second timer to guess a randomly generated secret number, with real-time feedback, sound effects, and a persistent leaderboard.

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
<img src="https://img.shields.io/badge/REST_API-6DB33F?style=for-the-badge&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Gameplay Flow](#gameplay-flow)
- [Leaderboard](#leaderboard)
- [Project Structure](#project-structure)
- [Preview](#preview)
- [Learning Outcomes](#learning-outcomes)
- [Roadmap](#roadmap)

---

<div align="center">

## 📖 Overview

</div>

Guess The Number is a lightweight full-stack game that demonstrates end-to-end web development — from a responsive React frontend, through a Java REST API backend, to persistent score storage in SQL. It's built to showcase clean state management, API integration, and database-backed leaderboard logic.

<div align="center">

## ✨ Features

</div>

- **Core Gameplay** — Guess a randomly generated secret number within a set range
- **60-Second Timer** — Live countdown adds urgency to every round
- **Instant Feedback** — Too High / Too Low / Correct responses on each guess
- **Sound Effects** — Distinct audio cues for correct, incorrect, and timeout events
- **Confetti Celebration** — Visual reward on a successful guess
- **Persistent Leaderboard** — Scores stored and ranked via SQL
- **Responsive UI** — Optimized for both desktop and mobile

<div align="center">

## 🧰 Tech Stack

| Layer | Technology |
|:---:|:---:|
| 🎨 Frontend | React (Vite), HTML5, CSS3, JavaScript |
| ⚙️ Backend | Java REST API |
| 🗄️ Database | SQL |
| 🔗 Communication | REST |

</div>

<div align="center">

## 🏗️ System Architecture

</div>

```
Player
  │
  ▼
React Frontend
  │
  │  REST API calls
  ▼
Java Backend (REST Controllers → Services)
  │
  ▼
SQL Database
```

<div align="center">

## 🎲 Gameplay Flow

</div>

1. Player enters a username
2. A secret number is generated
3. The 60-second timer starts
4. Player submits guesses and receives Too High / Too Low / Correct feedback
5. On a correct guess (or timeout), the score is calculated and saved
6. The leaderboard updates with the new result

<div align="center">

## 🏆 Leaderboard

Players are ranked using a combination of:

🥇 Highest score &nbsp;&nbsp;•&nbsp;&nbsp; ⚡ Fastest completion time &nbsp;&nbsp;•&nbsp;&nbsp; 🎯 Fewest attempts

**Data stored per entry:**

| Field | Description |
|:---:|:---:|
| Username | Player identifier |
| Attempts | Number of guesses taken |
| Time | Time taken to guess correctly |
| Score | Computed final score |
| Timestamp | When the game was played |

</div>

<div align="center">

## 📂 Project Structure

</div>

```
Guess-The-Number/
├── Frontend/
│   ├── Components/
│   ├── Pages/
│   ├── Assets/
│   └── Styles/
├── Backend/
│   ├── Controllers/
│   ├── Services/
│   ├── Models/
│   └── REST API/
└── Database/
    └── SQL/
```

<div align="center">

## 📸 Preview

### 🎮 Home Screen

<img src="https://github.com/user-attachments/assets/259f9e05-39dc-49f9-b97b-8302ecfecb6e" width="80%">

<br>

### 🏆 Winning Screen

<img src="https://github.com/user-attachments/assets/e6d08bfb-2474-4c73-ad98-216becb649cc" width="80%">

<br>

### 🎉 Leaderboard

<img src="https://github.com/user-attachments/assets/9223c250-5d3e-42f0-9d83-c462ef271304" width="80%">

</div>

<div align="center">

## 💡 Learning Outcomes

✅ Full-stack application development &nbsp;&nbsp;•&nbsp;&nbsp; ✅ REST API design and integration &nbsp;&nbsp;•&nbsp;&nbsp; ✅ React state management

✅ SQL CRUD operations &nbsp;&nbsp;•&nbsp;&nbsp; ✅ Backend input validation &nbsp;&nbsp;•&nbsp;&nbsp; ✅ Timer- and event-driven game logic

</div>

<div align="center">

## 🌟 Roadmap

🎖 Achievement badges &nbsp;&nbsp;•&nbsp;&nbsp; 🌙 Dark mode &nbsp;&nbsp;•&nbsp;&nbsp; 👥 Multiplayer mode

📊 Player statistics dashboard &nbsp;&nbsp;•&nbsp;&nbsp; 🌍 Global leaderboard &nbsp;&nbsp;•&nbsp;&nbsp; 🔐 User authentication

</div>

---

<p align="center">
If you found this project useful, consider giving it a ⭐ on GitHub.
</p>
