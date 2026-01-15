import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Leaderboard from "./leaderboard";

/* 🔊 Sounds */
const beepSound = new Audio("/beep.mp3");
const winSound = new Audio("/win.mp3");

/* 🏠 HOME PAGE */
function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const start = () => {
    if (!name.trim()) {
      alert("Enter your name");
      return;
    }
    sessionStorage.setItem("username", name.trim());
    navigate("/game");
  };

  return (
    <div className="h-container">
      <h1>🎮 Guess The Number</h1>
      

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={start}>Start Game 🚀</button>
    </div>
  );
}

/* 🎲 GAME PAGE */
function Game() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [guess, setGuess] = useState("");
  const [hint, setHint] = useState("🎯 Guess a number between 1 - 100");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  /* ✅ Get username */
  useEffect(() => {
    const storedName = sessionStorage.getItem("username");
    if (!storedName) {
      navigate("/");
    } else {
      setUsername(storedName);
      startGame();
    }
  }, [navigate]);

  /* ⏱ Timer */
  useEffect(() => {
    if (gameOver) return;

    if (timeLeft === 0) {
      setHint("⏰ Time Over!");
      beep();
      setGameOver(true);
      return;
    }

    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

  const startGame = async () => {
    await fetch("http://localhost:8080/api/start", { method: "POST" });
    setAttempts(0);
    setTimeLeft(60);
    setGuess("");
    setGameOver(false);
    setHint("🎯 New Game Started ! Guess 1 - 100");
  };

  const submitGuess = async () => {
    if (!guess) {
      beep();
      setHint("⚠ Enter a number");
      return;
    }

    const num = Number(guess);
    if (Number.isNaN(num) || num < 1 || num > 100) {
      beep();
      setHint("⚠ Enter number between 1 and 100");
      return;
    }

    const timeTaken = 60 - timeLeft;

    const res = await fetch(
      `http://localhost:8080/api/guess?guess=${num}&username=${username}&timeTaken=${timeTaken}`,
      { method: "POST" }
    );

    const text = await res.text();
    setAttempts(a => a + 1);
    setHint(text);

    if (text.includes("Correct")) {
      winBeep();
      setGameOver(true);
    } else {
      beep();
    }
  };

  const goHome = () => {
    sessionStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      {/* 🎊 CONFETTI */}
      {gameOver && hint.includes("Correct") && <Confetti />}

      <div className="container">
        {/* ⬅️ BACK BUTTON */}
        <button className="back-btn" onClick={goHome}>←</button>

        <h2 className="player-title">👤 Player   {username}</h2>


        <input
          value={guess}
          onChange={e => setGuess(e.target.value)}
          disabled={gameOver}
          placeholder="Enter number"
        />

        <button onClick={submitGuess} disabled={gameOver}>
          Submit
        </button>

        <button onClick={startGame}>
          Play Again 🔄
        </button>

        <button onClick={() => navigate("/leaderboard")}>
          Leaderboard 🏆
        </button>

        <p>{hint}</p>

        {/* ✅ STATUS ROW */}
        <div className="status-row">
          <span>Attempts: {attempts}</span>
          <span>|</span>
          <span>⏱ {timeLeft}s</span>
        </div>
      </div>
    </>
  );
}

/* 🎊 CONFETTI */
function Confetti() {
  return (
    <div className="confetti-container">
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 3 + Math.random() * 3 + "s",
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
          }}
        />
      ))}
    </div>
  );
}

/* 🔊 sounds */
function beep() {
  beepSound.currentTime = 0;
  beepSound.play().catch(() => {});
}

function winBeep() {
  winSound.currentTime = 0;
  winSound.play().catch(() => {});
}

/* 🌍 ROUTER */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}
