import React, { useEffect, useState, useRef } from "react";
import Table from "./UI/Table";
import Nav from "./UI/Nav";
import Card from "./UI/Card";

const DUMMY_CARDS = [
  {
    id: 0,
    src: require(`./assets/images/0.jpg`),
    letter: "A",
    ext: ".jpg",
  },
  {
    id: 1,
    src: require(`./assets/images/1.jpg`),
    letter: "B",
    ext: ".jpg",
  },
  {
    id: 2,
    src: require(`./assets/images/2.jpg`),
    letter: "C",
    ext: ".jpg",
  },
  {
    id: 3,
    src: require(`./assets/images/3.jpeg`),
    letter: "D",
    ext: ".jpeg",
  },
  {
    id: 4,
    src: require(`./assets/images/4.jpg`),
    letter: "E",
    ext: ".jpg",
  },
];

const App = () => {
  const [cards, setCards] = useState(DUMMY_CARDS);
  const [cardDeck, setCardDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [openCard, setOpenCard] = useState([]);
  const [foundMatches, setFoundMatches] = useState({});

  const timer = useRef(null);

  const suffleCards = (cards) => {
    const deck = cards.concat(cards);
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = deck[i];
      deck[i] = deck[j];
      deck[j] = k;
    }
    setCardDeck(deck);
    setScore(0);
    setOpenCard([]);
    setFoundMatches([]);
  };

  const flipAll = () => {};

  const showAll = () => {};

  const compareCards = () => {
    const [firstCard, secondCard] = openCard;
    if (cardDeck[firstCard].id === cardDeck[secondCard].id) {
      setFoundMatches((prev) => ({ ...prev, [cardDeck[firstCard].id]: true }));
      setOpenCard([]);
      console.log("Match!");
      setScore(score + 1);
      console.log(foundMatches);
      return;
    } else {
      timer.current = setTimeout(() => {
        setOpenCard([]);
      }, 800);
    }
  };

  const checkWin = () => {
    if (Object.keys(foundMatches).length === cards.length) {
      console.log("YOU WON");
    }
  };

  const checkFlipped = (index) => {
    return openCard.includes(index);
  };

  const checkFound = (card) => {
    return Boolean(foundMatches[card.id]);
  };

  const checkTurn = (card) => {
    if (openCard.length === 1) {
      setOpenCard((prev) => [...prev, card]);
    } else {
      setOpenCard([card]);
    }
  };

  useEffect(() => {
    checkWin();
  }, [foundMatches]);

  useEffect(() => {
    let timer = null;
    if (openCard.length === 2) {
      timer = setTimeout(compareCards, 500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [openCard]);

  useEffect(() => {
    suffleCards(cards);
    setScore(0);
  }, []);

  return (
    <div>
      <Nav handleShuffle={suffleCards} cards={cards} score={score} />
      <Table>
        {cardDeck.map((card, index) => {
          return (
            <Card
              key={index}
              index={index}
              card={card}
              handleTurn={checkTurn}
              isFlipped={checkFlipped(index)}
              isFound={checkFound(card)}
            />
          );
        })}
      </Table>
    </div>
  );
};

export default App;
