import React, {useState} from 'react'
import uniqid from 'uniqid';
import Card from './card.js'
import Win from './Win.js'
import Lose from './Lose.js'
import andresilva from '../images/gamePics/andresilva.png'
import bernardo from '../images/gamePics/bernardo.png'
import bruno from '../images/gamePics/bruno.png'
import cancelo from '../images/gamePics/cancelo.png'
import cr7 from '../images/gamePics/cr7.png'
import danilo from '../images/gamePics/danilo.png'
import lopes from '../images/gamePics/lopes.png'
import mendes from '../images/gamePics/mendes.png'
import moutinho from '../images/gamePics/moutinho.png'
import palhinha from '../images/gamePics/palhinha.png'
import renato from '../images/gamePics/renato.png'
import semedo from '../images/gamePics/semedo.png'

function Game({setGameStarted, game1}) {
    const[game,setGame] =useState({
        gameLost:false,
        gameWon:false,
        currentScore:0
    })
    const [cards,setCards] = useState([
        {pic:andresilva, id:uniqid()},
        {pic:bernardo, id:uniqid()},
        {pic:bruno, id:uniqid()},
        {pic:cancelo, id:uniqid()},
        {pic:cr7, id:uniqid()},
        {pic:danilo, id:uniqid()},
        {pic:lopes, id:uniqid()},
        {pic:mendes, id:uniqid()},
        {pic:moutinho, id:uniqid()},
        {pic:palhinha, id:uniqid()},
        {pic:renato, id:uniqid()},
        {pic:semedo, id:uniqid()},
    ])
    const [usedCards,setUsed] = useState([])

    function backHome(){
      setGame(prevGame=> ({...prevGame ,currentScore:0, gameLost:false, gameWon:false }))
      setGameStarted({...game1, gameStarted:false})
    }
    
function play(e){
    let getCard = usedCards.filter(id =>(id === e.target.id))
if (getCard.length<1){
    setUsed(prevUsed => [...prevUsed,e.target.id])
    setGame(prevGame=> ({...prevGame ,currentScore:prevGame.currentScore+1}))
    shuffleCards()
    if (game.currentScore>10)
    setGame(prevGame=> ({...prevGame , gameWon:true, gameLost:false }))
    
}else{
    setGame(prevGame=> ({...prevGame ,currentScore:0, gameLost:true, gameWon:false }))
    setUsed([])
}}
  
    function shuffleCards() {
        let array = [...cards];
        let currentIndex = array.length,
          randomIndex;
      
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
        setCards(array);
      }
     
    return (
       <div className="game">
         <div className="cont-cont">
           
          <div className="grid-cont">
            
            {cards.map((obj) => {
              return <Card play={play} img={obj.pic} id={obj.id} />;
            })}
          </div>
        </div>
        <div className="curr-score golden1">
          <div>SCORE:{game.currentScore}</div>
        </div>
       <Win returnHome={backHome} result = {game}/>
       <Lose returnHome={backHome} result={game} />
      </div>
      
    )
}

export default Game
