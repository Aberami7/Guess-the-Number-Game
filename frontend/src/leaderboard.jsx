import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./leaderboard.css";

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/leaderboard")
      .then(res => res.json())
      .then(data => setScores(data))
      .catch(err => console.error(err));
  }, []);

  const getMedal = (i) =>
    i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1;

  return (
    <div className="leaderboard-container">

      {/* ⬅️ Back Button – TOP LEFT */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ←
      </button>

      <h1>🏆 Leaderboard</h1>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Attempts</th>
            <th>Time Taken (s)</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr key={s.id}>
              <td>{getMedal(i)}</td>
              <td>{s.username}</td>
              <td>{s.attempts}</td>
              <td>{s.timeTaken ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
