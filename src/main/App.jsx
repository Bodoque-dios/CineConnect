import Card from "./Card";
import SideNav from "./SideNav";
import { useState } from "react";

export default function App() {
  return (
    <>
      <div className="from-primary-950 via-primary-900 to-primary-950 font-libre h-screen w-full bg-gradient-to-b  overflow-hidden">
        <div className="flex flex-row justify-between">
        <h1 className="text-4xl my-4 ml-2 font-bold text-naranjo">CineConnect</h1>
        <SideNav />

        </div>
        <nav className="flex justify-around py-4 text-white"></nav>
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



