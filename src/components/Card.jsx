import React from 'react'
import './Card.css'

const Card = ({card}) => {
  return (
    <div className='Cards'>
        <h3>{card.snippet.title}</h3>
        <p>{card.snippet.description}</p>
        <img src={card.snippet.thumbnails.default.url} width={card.snippet.thumbnails.default.width} height={card.snippet.thumbnails.default.height}></img>
    </div>
  )
}

export default Card