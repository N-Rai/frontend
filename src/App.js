import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import NewsClassifier from './NewsClassifier';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to News Classifier</h1>
      <p>
        Our application helps you determine the credibility of news articles by analyzing their content.
        Simply input the URL of the news article, and we'll provide you with an instant classification based on the latest machine learning models.
      </p>
      <p>
        Start exploring now and make informed decisions with accurate news classifications!
      </p>
      <button className="btn" onClick={() => navigate('/NewsClassifier')}>
        Go To News Classifier
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewsClassifier" element={<NewsClassifier />} />
      </Routes>
    </Router>
  );
}

export default App;
