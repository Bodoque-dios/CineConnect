import Header from "../components/Header";
import Card from "./Card";
import { useEffect, useState } from "react";


// for Vite  applications
const key =  import.meta.env.VITE_TMDB_KEY
const APIUrl = import.meta.env.VITE_API_URL

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
    { id: 1, content: "Card 1" }, // coconut.jpg
  ];

  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);


  const removeCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const parseResults = (results) => {
    return results.map((result) => {
      return {id: result.id, content:{
        img: result.poster_path,
        title: result.title,
        overview: result.overview,
        genres: result.genre_ids,
      }
      };
    });
  }


  const getMovies = async () => {
    let url = 'https://api.themoviedb.org/3/trending/movie/week?language=es-es';
    let options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: key
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setCards(parseResults(json.results))
      })
      .catch(err => console.error('error:' + err));
  }

  const rateMovie = (id) => (liked) => {

    let url = `${APIUrl}/api/movies/rate`;
    let options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        // Authorization: key TODO: usar token dado al logearse
      },
      body: JSON.stringify({
        // userid: 1,
        movieId: id,
        liked: liked
      })
    };

    /*
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
      .catch(err => console.error('error:' + err));
     */
    

   // 'https://api.themoviedb.org/3/movie/69?language=en-US';

    /* 
     TODO: this endpoint
     
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
      .catch(err => console.error('error:' + err));
      */
    console.log(`rated ${id} as ${liked ? 'liked' : 'disliked'}`)
  }


  useEffect(() => {
    getMovies( )
  },[]);
  

  return (


      <div 
        style={{ display: "flex", justifyContent: "center" }} 
        className=" ease-in-out duration-900"
      >
        {cards.length > 0 ? (
          
          <Card
            key={cards[currentIndex].id}
            data={cards[currentIndex].content}
            onDelete={() => removeCard(cards[currentIndex].id)}
            onRate={rateMovie(cards[currentIndex].id)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-center text-white">
              ¡Ya no hay más películas!
            </h1>
          </div>
        )}
      </div>
  
  
  );
};



