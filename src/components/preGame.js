import React from "react";
import cristiano1 from "../images/cristiano1.png";

function PreGame() {
  return (
    <div className="preGame">
      <div className="wrap-btn">
        <div className="animated-button1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="golden">PLAY</div>
        </div>
      </div>
      
      <div className="front-pics">
          <div className="score golden1">HIGH-SCORE:69</div>
        <img className="cristiano1" alt="" src={cristiano1}></img>
        <a  className="gh-link"href="https://github.com/overflow68"><div className="gh-text golden1"><span>overflow68</span></div></a>
      </div>
    </div>
  );
}

export default PreGame;
