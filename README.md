# 🎯 Guess The Number
### A Full-Stack Interactive Number Guessing Web Game

> Test your intuition, race against time, and compete for the top spot on the leaderboard!

---

## 📖 Overview

**Guess The Number** is a full-stack web application that challenges players to identify a randomly generated number before the countdown reaches zero.

The project combines an engaging gaming experience with modern web technologies, featuring real-time gameplay, persistent score tracking, dynamic leaderboards, and seamless frontend-backend communication.

It demonstrates practical implementation of:

- ⚛️ Full Stack Development
- 🔄 REST API Integration
- 🗄️ SQL Database Operations
- ⏱️ Real-Time State Management
- 🎮 Interactive Game Logic
- 📱 Responsive UI Design

---

# 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| 🎨 Frontend | React (Vite), HTML5, CSS3, JavaScript |
| ⚙️ Backend | Java REST API |
| 🗄️ Database | SQL |
| 🔗 Communication | REST API |

---

# ✨ Features

✅ Interactive Number Guessing Gameplay

⏳ 60-Second Real-Time Countdown

🏆 Dynamic Live Leaderboard

💾 Persistent SQL Score Storage

🎯 Attempt Tracking

🔊 Audio Feedback

🎉 Confetti Celebration

👤 Username Validation

🔄 Play Again / Restart Option

📱 Fully Responsive Design

---

# 🎮 Gameplay Flow

```text
Enter Username
      │
      ▼
Generate Random Number
      │
      ▼
60-Second Timer Starts
      │
      ▼
Player Makes Guesses
      │
      ▼
Backend Validates Guess
      │
      ▼
Correct? ── Yes ──► Save Score ► Update Leaderboard 🎉
      │
      No
      │
      ▼
Continue Until Time Ends
```

---

# 🏆 Leaderboard Ranking

Players are ranked intelligently based on:

🥇 Highest Score

⚡ Fastest Completion Time

🎯 Fewest Attempts

The leaderboard updates automatically after every completed game.

### Stored Information

- Username
- Score
- Attempts
- Time Taken
- Timestamp

---

# ⏱ Timer Mechanism

```text
Game Starts
      │
      ▼
60s Countdown Begins
      │
      ▼
Player Keeps Guessing
      │
      ├──────── Correct Guess
      │               │
      │               ▼
      │          Save Score
      │
      ▼
Time Reaches Zero
      │
      ▼
Game Ends Automatically
```

---

# 🔊 Sound & Visual Effects

- ✅ Correct Guess Sound
- ❌ Wrong Guess Sound
- ⏰ Timeout Alert
- 🎉 Confetti Celebration Animation

---

# 🏗 System Architecture

```text
┌──────────────────────┐
│   React Frontend     │
└──────────┬───────────┘
           │ REST API
           ▼
┌──────────────────────┐
│   Java Backend API   │
└──────────┬───────────┘
           │ SQL Queries
           ▼
┌──────────────────────┐
│    SQL Database      │
└──────────────────────┘
```

---

# 📸 Application Preview

## 🎮 Game Interface

<img width="1920" height="1020" alt="Game Screen" src="https://github.com/user-attachments/assets/259f9e05-39dc-49f9-b97b-8302ecfecb6e"/>

---

## 🏆 Leaderboard

<img width="1920" height="1020" alt="Leaderboard" src="https://github.com/user-attachments/assets/e6d08bfb-2474-4c73-ad98-216becb649cc"/>

---

## 🎉 Winning Screen

<img width="1920" height="1020" alt="Winning Screen" src="https://github.com/user-attachments/assets/9223c250-5d3e-42f0-9d83-c462ef271304"/>

---

# 💡 Learning Outcomes

This project strengthened my understanding of:

- Full Stack Application Development
- RESTful API Design
- React State Management
- SQL Database Integration
- Backend Validation Logic
- Responsive UI Development
- Real-Time Timer Implementation
- Interactive Web Game Design

---

## ⭐ If you found this project interesting, consider giving it a Star!
