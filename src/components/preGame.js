import React from "react";
import cristiano1 from "../images/cristiano1.png";

function PreGame(props) {
  return (
    <div className="preGame">
      <div className="wrap-btn">
        <div onClick={props.start} className="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="golden">PLAY</div>
        </div>
      </div>
      
      <div className="front-pics">
          <div className="score golden1">Portugal<br></br> Squad<br></br> Memory-game</div>
        <img className="cristiano1" alt="" src={cristiano1}></img>
        <a  className="gh-link"href="https://github.com/overflow68"><div className="gh-text golden1"><span>overflow68</span></div></a>
      </div>
    </div>
  );
}

export default PreGame;
