import React, {useEffect} from 'react'
import cry7 from '../images/cristiano1.png'
import ConfettiGenerator from "confetti-js";
function Win({result, returnHome}) {
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
   
    return () => confetti.clear();
  }, [])

    return (
      <div className='win-msg'>
      <div className={result.gameLost===false && result.gameWon===true?"cover active":"cover"}>
      <div className='card'>
      <div className='golden1'>SIUUUUUUUUUUU!</div>
      <img className='aftergame-pic' alt="" src={cry7}></img>
      <div className="wrap-btn">
      <div className="wrap-btn">
  <div onClick={returnHome} className="animated-button1">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div className="golden">HOME</div>
  </div>
</div>
</div>
</div><canvas id="my-canvas"></canvas>
</div>
  </div>
    )
}

export default Win
