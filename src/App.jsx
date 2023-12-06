import './App.css';
import { useState } from 'react';

function Cards() {
  const phrases = [
    "Day and Night",
    "Sunrise and Sunset",
    "Hot and Cold",
    "Happy and Sad",
    "Beginnings and Endings",
    "High and Low",
    "Fast and Slow",
    "Open and Closed",
    "Love and Hate",
    "Up and Down",
    "Lost and Found",
    "Big and Small"
  ];
  
  return (
    <div className='cards-container'>
      {phrases.map((phrase, index) => (
        <div className='card' key={index}>
          <p>{phrase}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <div className='game-container'>
      <h1>Memory Game</h1>
      <div className='scores'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <p>Get points by clicking each of the images only once!</p>
      <Cards />
    </div>
  )
}