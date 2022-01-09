import React from 'react'
import cry7 from '../images/cristiano1.png'

function Win({result, returnHome}) {
    
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
</div>
</div>
  </div>
    )
}

export default Win
