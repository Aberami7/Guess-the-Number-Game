<div align="center">

# 🎮 Guess The Number

### ⏳ Beat the Clock • 🎯 Guess Smart • 🏆 Reach the Top

<img src="https://img.shields.io/badge/Interactive_Game-8A2BE2?style=for-the-badge&logo=gamejolt&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
<img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/REST_API-8A2BE2?style=for-the-badge&logo=fastapi&logoColor=white"/>

<br><br>

### 🎯 Can you discover the secret number before the countdown reaches zero?

A **Full Stack Number Guessing Web Game** built using **React, Java REST API and SQL**, delivering a fun and engaging experience through real-time gameplay, leaderboard rankings, sound effects, and persistent score tracking.

</div>

---

<div align="center">

# 🎮 Features

| 🎯 Gameplay | ⏱️ Timer | 🏆 Leaderboard |
|:-----------:|:--------:|:--------------:|
| Guess the Secret Number | 60-Second Countdown | Dynamic Ranking |

| 🔊 Sound Effects | 💾 Database | 📱 Responsive |
|:----------------:|:-----------:|:-------------:|
| Correct • Wrong • Timeout | SQL Score Storage | Mobile Friendly |

</div>

---

<div align="center">

# 🚀 Tech Stack

| Category | Technology |
|:---------:|:----------:|
| 🎨 Frontend | React (Vite), HTML5, CSS3, JavaScript |
| ⚙️ Backend | Java REST API |
| 🗄️ Database | SQL |
| 🔗 Communication | REST API |

</div>

---

<div align="center">

# 🎲 Gameplay

</div>

```text
👤 Enter Username
        │
        ▼
🎲 Secret Number Generated
        │
        ▼
⏳ 60 Seconds Start
        │
        ▼
🔢 Enter Your Guess
        │
        ▼
⬆ Too High
⬇ Too Low
✅ Correct
        │
        ▼
🏆 Save Score
        │
        ▼
📊 Update Leaderboard
```

---

<div align="center">

# 🏆 Leaderboard

Players are ranked based on:

🥇 Highest Score

⚡ Fastest Completion Time

🎯 Fewest Attempts

### Stored Information

| Username | Attempts | Time | Score | Timestamp |
|:--------:|:--------:|:----:|:-----:|:---------:|
| ✔ | ✔ | ✔ | ✔ | ✔ |

</div>

---

<div align="center">

# ⏳ Timer Logic

</div>

```text
Start Game
    │
    ▼
60 Second Countdown
    │
    ▼
Player Makes Guesses
    │
    ├────────► Correct Guess
    │                │
    │                ▼
    │         Store Score
    │
    ▼
Time Ends
    │
    ▼
Game Over
```

---

<div align="center">

# 🔊 Sound & Animation

</div>

- ✅ Correct Guess Sound
- ❌ Wrong Guess Sound
- ⏰ Timeout Sound
- 🎉 Confetti Celebration

---

<div align="center">

# 🏗️ System Architecture

</div>

```text
              🎮 Player
                  │
                  ▼
      ┌─────────────────────┐
      │   React Frontend    │
      └─────────┬───────────┘
                │
            REST API
                │
                ▼
      ┌─────────────────────┐
      │ Java Backend (REST) │
      └─────────┬───────────┘
                │
                ▼
      ┌─────────────────────┐
      │    SQL Database     │
      └─────────────────────┘
```

---

<div align="center">

# 📸 Game Preview

### 🎮 Home Screen

<img src="https://github.com/user-attachments/assets/259f9e05-39dc-49f9-b97b-8302ecfecb6e" width="90%">

<br><br>

### 🏆 Winning Screen

<img src="https://github.com/user-attachments/assets/e6d08bfb-2474-4c73-ad98-216becb649cc" width="90%">

<br><br>

### 🎉 Leadboard

<img src="https://github.com/user-attachments/assets/9223c250-5d3e-42f0-9d83-c462ef271304" width="90%">

</div>

---

<div align="center">

# 📂 Project Structure

</div>

```text
Guess-The-Number
│
├── Frontend
│   ├── Components
│   ├── Pages
│   ├── Assets
│   └── Styles
│
├── Backend
│   ├── Controllers
│   ├── Services
│   ├── Models
│   └── REST API
│
└── Database
    └── SQL
```

---


# 💡 Learning Outcomes

✅ Full Stack Development

✅ REST API Integration

✅ React State Management

✅ SQL CRUD Operations

✅ Backend Validation

✅ Responsive UI Design

✅ Timer & Game Logic



---

<div align="center">

# 🌟 Future Enhancements

🎖 Achievement Badges

🌙 Dark Mode

👥 Multiplayer Mode

📊 Player Statistics

🌍 Global Leaderboard

🔐 User Authentication

</div>

---

<div align="center">

## ⭐ If you enjoyed this project, don't forget to Star the repository!

</div>
