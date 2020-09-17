import React from 'react';
import WordCard from './WordCard';
import './App.css';
    const word = "Hello";
function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>ADVANCED COMPUTER ENGINEERING LABORATORY I</h1>
      <WordCard value="Hello"/>
      <h2>NATTHANON NARIT COMPUTER ENGINEERING</h2>
    </header>
    </div>
  );
}
export default App;