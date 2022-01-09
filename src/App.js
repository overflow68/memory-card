import './App.css';
import PreGame from './components/preGame.js'
import React,{useState} from 'react';
import Game from './components/game.js'

function App() {
  const [game, setGameStarted] = useState({
    highScore:0,
    gameStarted:false
  }) 

  function startGame(){
    setGameStarted({...game, gameStarted:true})
  }
  return (
    <div className="App">
      {game.gameStarted?<Game game1={game} setGameStarted={setGameStarted}/>:<PreGame start={startGame}/>}

    </div>
  );
}

export default App;
