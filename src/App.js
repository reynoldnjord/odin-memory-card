import React, {useState} from 'react';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard'
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='app'>
      <Header />
      <Scoreboard score={score} bestScore={bestScore}/>
      <Gameboard 
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
