import React from 'react'
import PropTypes from 'prop-types'



 function Card({
  handleClick,
  flipped,
  solved,
  id,
  type,
  disabled,
}) {
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''}`}

      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className='flipper'>
        <img
          alt='card'
          className={flipped ? 'front' : 'back'}
          src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
    
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  
}

export default Card;