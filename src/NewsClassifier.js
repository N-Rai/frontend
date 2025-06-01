import React, { useState } from "react";
import "./NewsClassifier.css"; // Link to your styled CSS

const NewsClassifier = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to classify news. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="news-classifier-container">
      <h1 className="title">Fake News Lab</h1>
      <p className="subtitle">An AI-powered tool to classify news articles</p>

      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          placeholder="Enter news URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="url-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {result && (
        <div className="result-box">
          <h2>{result.title}</h2>
          <p className={`prediction-text ${result.prediction.toLowerCase()}`}>
            {result.prediction}
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsClassifier;
