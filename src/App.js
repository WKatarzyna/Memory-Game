
import React, { useState, useEffect } from 'react'
import Navigation from './components/navigation/Navigation';
import Board from './components/main/board/board';
import setLayer from './components/main/layer/layer';
import Footer from './components/main/footer/footer'

function App() {

  
  let [flipped, setFlipped] = useState([])// śledzenie id karty
  let[turn, setTurn]= useState(false)//odwracanie kart do 2 
  let [solved, setSolved] = useState([])// śledzenie id karty
  let [cards, setCards] = useState([])
  useEffect(() => {
    setCards(setLayer())
  }, [])
  let sameCardClickedTwice = (id) => flipped.includes(id)

  let isAMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id)
    console.log(clickedCard);
    const flippedCard = cards.find((card) => flipped[0] === card.id)
    console.log(flippedCard);
    
    return flippedCard.type === clickedCard.type
    
  }

  let resetButton = () => {
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
        setTimeout(resetCards, 600)
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
        // śledzenie id karty
         setFlipped([]),
         setTurn(false),
        
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
       <Footer />
     </div>);
}

export default App;

 
