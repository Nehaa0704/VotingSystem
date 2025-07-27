import React, { useState, useEffect } from "react";

const candidates = ["vansh", "sania", "nota"];

const Homepage = ({ username }) => {
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || {};
    if (votedUsers[username]) {
      setVotedCandidate(votedUsers[username]);
    }
  }, [username]);

  const handleVote = (candidate) => {
    const votes = JSON.parse(localStorage.getItem("votes")) || {};
    const votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || {};

    if (votedUsers[username]) {
      setMessage("⚠️ You have already voted.");
      return;
    }
  votes[candidate] = (votes[candidate] || 0) + 1;
    votedUsers[username] = candidate;

    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("votedUsers", JSON.stringify(votedUsers));
    setVotedCandidate(candidate);
    setMessage("✅ Vote submitted successfully!");
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Welcome, {username} 👋</h2>
      <h3>Choose your candidate:</h3>

      {candidates.map((candidate) => (
        <div key={candidate} style={{ margin: "10px" }}>
          <button
            disabled={!!votedCandidate}
            onClick={() => handleVote(candidate)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: votedCandidate === candidate ? "green" : "",
              color: votedCandidate === candidate ? "white" : "black",
              cursor: votedCandidate ? "not-allowed" : "pointer",
            }}
          >
            {candidate}
          </button>
        </div>
      ))}

      {votedCandidate && (
        <p style={{ marginTop: "20px", color: "green" }}>
          ✅ You voted for: <strong>{votedCandidate}</strong>
        </p>
      )}
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
};

export default Homepage;