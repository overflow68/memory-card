import React from 'react'
import cry7 from '../images/cry7.png'


function Win({result, returnHome}) {
    
  

    return (
      
      <div className='lose-msg'>
        
      <div className={result.gameLost===true && result.gameWon===false?"cover active":"cover"}>
        
      <div className='card'>
      <div className='golden1'>Better luck next time, pal!</div>
      <img className='aftergame-pic' alt="" src={cry7}></img>
      
      <div className="wrap-btn">
  <div onClick={returnHome}  className="animated-button1">
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
    )
}

export default Win