import { useState } from 'react';
import Cube from './components/Cube';
import './App.css';

function App() {
  const [num, setNum] = useState(1);
  function generateRandomNum() {
    const randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    setNum(randomNum);
  }

  return (
    <div className="App">
      <Cube num={num} />
      <button onClick={generateRandomNum}>New Cube</button>
    </div>
  );
}

export default App;

