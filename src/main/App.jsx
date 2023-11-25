import Header from "../components/Header";
import Card from "./Card";
import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="from-primary-950 via-primary-900 to-primary-950 font-inter min-h-screen w-full bg-gradient-to-b  overflow-hidden">
        <Header />
        <Carousel />
      </div>
    </>
  );
}

const Carousel = () => {
  const initialCards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    // Add more cards as needed
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);

  const removeCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  return (
   
      <div style={{ display: "flex", justifyContent: "center" }} className=" ease-in-out duration-900">
        <Card
          key={cards[currentIndex].id}
          data={cards[currentIndex].content}
          onDelete={() => removeCard(cards[currentIndex].id)}
        />
      </div>
  
  
  );
};



