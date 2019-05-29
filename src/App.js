
import React, { useState, useEffect } from 'react'
import Navigation from './components/navigation/Navigation';
import Board from './components/main/board/board';
import setLayer from './components/main/layer/layer';

function App() {
   const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const[turn, setTurn]= useState([])
  const [solved, setSolved] = useState([])

  useEffect(() => {
    setCards(setLayer())
  }, [])
  const sameCardClickedTwice = (id) => flipped.includes(id)

  const isAMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    console.log(clickedCard);
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    console.log(flippedCard);
    
    return flippedCard.type === clickedCard.type
    
  }

  const resetButton = () => {
    setFlipped([])
    setTurn(false)
    for(let i =0; i < cards.lenght;i++){
      console.log(cards[i]);
    }
  }
  const resetCards = () => {
    setFlipped([])
    setTurn(false)
  }

  const handleClick = (id) => {
    setTurn(true)
    if (flipped.length === 0) {
      
      setFlipped((flipped) => [...flipped, id])
      setTurn(false)
    } else {
      if (sameCardClickedTwice(flipped, id)) return
      setFlipped((flipped) => [...flipped, id])
      if (isAMatch(id)) {
        setSolved([...solved, ...flipped, id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  }

  return (
    <div className="container">
    <nav>
      <Navigation/>
      <button 
       className="reset"
       onClick={(
       ) => ( resetButton(
         setFlipped([]),
         setTurn(false),
        <img
        alt='card'
        className={flipped ? 'front' : 'back'}
        src={flipped || '/img/back.png'}
        
  
      />
       ))} >Reset Game</button>
      </nav>
      <main>
       
        <div className="board-content">
        <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        solved={solved}
        turn={turn}/>
        </div>
        
       </main>
     </div>);
}

export default App;

 
