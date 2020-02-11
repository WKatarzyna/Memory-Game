import React, { useState, useEffect } from "react";
import Navigation from "./components/navigation/Navigation";
import Board from "./components/main/board/board";
import Setgame from "./utils/layer";
import Footer from "./components/main/footer/footer";

function App() {
  let [solved, setSolved] = useState([]); // śledzenie odwrócenia karty
  let [settingCards, setCardsLayer] = useState([]); // śledzenie id karty
  let [turn, setTurn] = useState(false); //odwracanie kart do 2
  let [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(Setgame());
  }, []);

  let sameCardClickedTwice = id => settingCards.includes(id);

  let cardMatch = id => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => settingCards[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };
  const resetButton = () => {
    setCardsLayer([]);
    setTurn(false);
    setSolved([]);
  };
  const resetCards = () => {
    setCardsLayer([]);
    setTurn(false);
  };

  const handleClick = id => {
    setTurn(true);
    if (settingCards.length === 0) {
      setCardsLayer(settingCards => [...settingCards, id]);
      setTurn(false);
    } else {
      if (sameCardClickedTwice(settingCards, id)) return;
      setCardsLayer(setCards => [...settingCards, id]);
      if (cardMatch(id)) {
        setSolved([...solved, ...settingCards, id]); //odwołanie do atrybutu obiektu cards
        resetCards();
      } else {
        setTimeout(resetCards, 700);
      }
    }
  };

  return (
    <div className="container">
      <nav>
        <Navigation />
        <button
          className="reset"
          onClick={() =>
            resetButton(setSolved([]), setCardsLayer([]), setTurn(false))
          }
        >
          Reset Game
        </button>
      </nav>
      <main>
        <div className="board-content">
          <Board
            cards={cards}
            flipped={settingCards}
            handleClick={handleClick}
            solved={solved}
            turn={turn}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
