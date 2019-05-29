import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card/card';

function Board({
  cards,
  flipped,
  solved,
  handleClick,
  turn,
}) {
  return (
    <div className='board'>
      {cards.map((card) => (
        <Card
          key={card.id}
          handleClick={handleClick}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          turn={turn || solved.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,

}

export default Board;