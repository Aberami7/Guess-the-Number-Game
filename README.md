                                         🎯 Guess The Number – Full Stack Web Game
📌 Project Overview

Guess The Number is a full-stack interactive web application where users attempt to guess a randomly generated number within a limited time.

The application includes a real-time countdown timer, sound effects, leaderboard ranking system, and persistent score storage using a SQL database.

This project demonstrates frontend-backend integration, state management, API handling, database operations, and game logic implementation.

🚀 Tech Stack

Frontend

React (Vite)

CSS

JavaScript (ES6)

Backend

Java (REST API)

Database

SQL (Leaderboard storage)

✨ Core Features

🎮 Interactive number guessing game

⏱ 60-second countdown timer

🔊 Sound effects (Correct / Wrong / Timeout)

🎉 Confetti animation on success

📊 Attempt counter

🏆 Dynamic leaderboard

💾 Persistent score storage in SQL

🔄 Restart / Play Again functionality

✅ Username validation before starting game

📱 Responsive user interface

🏆 Leaderboard System

The leaderboard ranks players based on:

Higher score

Faster completion time

Fewer attempts

Stored Data:

Username

Attempts

Time taken (seconds)

Score

Timestamp

Example SQL Logic:
ORDER BY score DESC, time_taken ASC, attempts ASC;

The leaderboard data is fetched dynamically from the backend API and rendered using React.

⏳ Timer Logic

Countdown starts when the game begins.

User must guess the number within 60 seconds.

If time reaches 0:

Game ends automatically

Timeout sound plays

Score is recorded

🔊 Sound & Animation

Correct guess sound effect

Wrong guess sound effect

Timeout alert sound

Confetti animation triggered upon successful guess

🏗 System Architecture

Frontend (React + Vite)
     ⬇
Backend (Java REST API)
     ⬇
SQL Database

Flow:

User enters name

Game starts (timer initialized)

User submits guess

Backend validates guess

Result returned to frontend

<img width="1920" height="1020" alt="Screenshot 2026-01-15 113124" src="https://github.com/user-attachments/assets/259f9e05-39dc-49f9-b97b-8302ecfecb6e" />

<img width="1920" height="1020" alt="Screenshot 2026-01-15 113051" src="https://github.com/user-attachments/assets/e6d08bfb-2474-4c73-ad98-216becb649cc" />

<img width="1920" height="1020" alt="Screenshot 2026-02-21 164638" src="https://github.com/user-attachments/assets/9223c250-5d3e-42f0-9d83-c462ef271304" />

















Score stored in database

Leaderboard updated dynamically
