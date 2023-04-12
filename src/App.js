import React, { useEffect, useState } from "react";
import Table from "./UI/Table";
import Nav from "./UI/Nav";

const DUMMY_CARDS = [
  {
    id: 0,
    src: "../assets/images/",
    letter: "A",
    ext: ".jpg",
  },
  {
    id: 1,
    src: "../assets/images/",
    letter: "B",
    ext: ".jpg",
  },
  {
    id: 2,
    src: "../assets/images/",
    letter: "C",
    ext: ".jpg",
  },
  {
    id: 3,
    src: "../assets/images/",
    letter: "D",
    ext: ".jpeg",
  },
  {
    id: 4,
    src: "../assets/images/",
    letter: "E",
    ext: ".jpg",
  },
  {
    id: 5,
    src: "../assets/images/",
    letter: "F",
    ext: ".jpg",
  },
  {
    id: 6,
    src: "../assets/images/",
    letter: "G",
    ext: ".jpg",
  },
  {
    id: 7,
    src: "../assets/images/",
    letter: "H",
    ext: ".jpg",
  },
  {
    id: 8,
    src: "../assets/images/",
    letter: "I",
    ext: ".jpg",
  },
  {
    id: 9,
    src: "../assets/images/",
    letter: "J",
    ext: ".jpg",
  },
  {
    id: 10,
    src: "../assets/images/",
    letter: "K",
    ext: ".jpg",
  },
];

const App = () => {
  const [cards, setCards] = useState(DUMMY_CARDS);
  const [cardDeck, setCardDeck] = useState([]);
  const [score, setScore] = useState(0);
  const [openCard, setOpenCard] = useState("");
  const [flipCard, setFlipCard] = useState();

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
  };

  const exChild = (callback) => {
    callback();
  };

  const checkTurn = (card, flipMethod) => {
    if (openCard === "") {
      setOpenCard(card);
      setFlipCard(flipMethod);
      return;
    } else if (openCard === card) {
      setScore(score + 1);
      setOpenCard("");
      setFlipCard(null);
      return;
    } else {
      exChild(flipMethod);
      exChild(flipCard);
      setOpenCard("");
      setFlipCard(null);
    }

    console.log(card);
    console.log(openCard);
  };

  useEffect(() => {
    suffleCards(cards);
    setScore(0);
  }, []);

  return (
    <div>
      <Nav handleShuffle={suffleCards} cards={cards} score={score} />
      <Table cards={cardDeck} checkTurn={checkTurn}></Table>
    </div>
  );
};

export default App;
