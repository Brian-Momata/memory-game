import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Cards() {
  const phrases = [
    { id: uuidv4(), text: "Day and Night" },
    { id: uuidv4(), text: "Sunrise and Sunset" },
    { id: uuidv4(), text: "Hot and Cold" },
    { id: uuidv4(), text: "Happy and Sad" },
    { id: uuidv4(), text: "Beginnings and Endings" },
    { id: uuidv4(), text: "High and Low" },
    { id: uuidv4(), text: "Fast and Slow" },
    { id: uuidv4(), text: "Open and Closed" },
    { id: uuidv4(), text: "Love and Hate" },
    { id: uuidv4(), text: "Up and Down" },
    { id: uuidv4(), text: "Lost and Found" },
    { id: uuidv4(), text: "Big and Small" }
  ];
  return (
    <div className='cards-container'>
      {phrases.map((phrase) => (
        <div className='card' key={phrase.id}>
          <p>{phrase.text}</p>
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