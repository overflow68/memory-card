import React from 'react'

function Card({id,img,play}) {
    return (
        <div className='grid-item'>
            <img id={id} onClick={play} className='player-pic' alt="" src={img}></img>
        </div>
    )
}

export default Card
