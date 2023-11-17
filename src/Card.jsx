import React, { useEffect, useState } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

export default function Card() {
  const [offset, setOffset] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);
  const [angle, setAngle] = useState(0);
  const [style, setStyle] = useState({
    transform: `rotate(${angle}deg)`,
    transition: "transform 0.2s ease",
  });

  // Quizas cambiar los colores pq ta feo
  const Genres = {
    Action: "bg-red-500",
    Adventure: "bg-blue-500",
    Animation: "bg-green-500",
    Biography: "bg-purple-500",
    Comedy: "bg-yellow-500",
    Crime: "bg-pink-500",
    Documentary: "bg-indigo-500",
    Drama: "bg-teal-500",
    Family: "bg-cyan-500",
    Fantasy: "bg-orange-500",
    FilmNoir: "bg-lime-500",
    History: "bg-red-600",
    Horror: "bg-blue-600",
    Music: "bg-green-600",
    Musical: "bg-purple-600",
    Mystery: "bg-yellow-600",
    Romance: "bg-pink-600",
    SciFi: "bg-indigo-600",
    ShortFilm: "bg-teal-600",
    Sport: "bg-cyan-600",
    Superhero: "bg-orange-600",
    Thriller: "bg-lime-600",
    War: "bg-red-700",
    Western: "bg-blue-700",
  };

  // Select a random genre once
  const randomGenre = () => {
    const keys = Object.keys(Genres);
    const RandomKey = keys[Math.floor(Math.random() * keys.length)];
    return [RandomKey, Genres[RandomKey]];
  };

  const [tags, setTags] = useState([
    ...Array(3)
      .fill()
      .map((_, index) => <Tag key={index} tag={randomGenre()} />),
    <Rating age="12" />,
  ]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setOffset([e.clientX, e.clientY]);
      setAngle((e.clientX - offset[0]) / 10);
      setStyle({
        transform: `rotate(${e.clientX - offset[0]}deg)`,
        transition: "transform 0.2s ease",
      });
    }
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    setStyle({
      transform: `rotate(${angle}deg)`,
      transition: "transform 0.2s ease",
    });
  };


const url = 'https://api.themoviedb.org/3/movie/12/images';
/*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjVjNzRhNjUwYzMyZmY5YzkzOGQ3NmE0ZTFkYTYxNCIsInN1YiI6IjY1NTYzODRmMDgxNmM3MDExYTBjNGNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I3NmkHWwFLjYaNcRQywFtJYgHrWItIaYvY34cIwOrEI'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
*/  
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={style}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleMouseMove}
      className="m-auto flex w-72 grow-0 flex-col justify-center rounded-2xl bg--800  backdrop-opacity-5 backdrop-invert bg-white/5 p-4 text-white"
    >
      <div className="relative flex flex-col">
  <h2 className="absolute bottom-10 p-2 z-10 text-2xl font-extrabold">
    Título de la película
  </h2>
  <div className="relative mb-2 rounded-xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://picsum.photos/200/250"
      alt=""
    />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
  </div>
  <div className="Tags absolute bottom-2 flex py-2">
    {/* Falta ver el overflow*/}
    {tags}
  </div>
</div>

      <p className="p-2 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis
        pariatur, dolorum aliquam ipsam eius molestias id temporibus eveniet
        facilis possimus libero consectetur sunt. Possimus mollitia beatae
        maiores commodi sunt.
      </p>
      <Controls />
    </div>
  );
}

function Tag({ tag }) {
  // seleccionar un color aleatorio
  return (
    <div className={`mx-2 rounded-full p-1 ${tag[1]}`}>
      <h3 className="text-center text-xs font-semibold">{tag[0]}</h3>
    </div>
  );
}

function Controls() {
  return (
    <div className="flex justify-between rounded-full bg-naranjo">
      <button className="m-2 rounded-full bg-lime-500 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-thumb-up stroke-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-heart"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-heart-off"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 3l18 18" />
          <path d="M19.5 12.572l-1.5 1.428m-2 2l-4 4l-7.5 -7.428a5 5 0 0 1 -1.288 -5.068a4.976 4.976 0 0 1 1.788 -2.504m3 -1c1.56 0 3.05 .727 4 2a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>

      <button className="m-2 rounded-full bg-rose-600 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-thumb-down"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
        </svg>
      </button>
    </div>
  );
}

function Rating({ age }) {
  age = parseInt(age, 10);

  // DPS SACAR ESTO
  const ages = [12, 16, 18];
  age = ages[Math.floor(Math.random() * ages.length)]

  switch (age) {
    case 12:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-rating-12-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M7 15v-6" />
          <path d="M15.5 12h3" />
          <path d="M17 10.5v3" />
          <path d="M10 10.5a1.5 1.5 0 0 1 3 0c0 .443 -.313 .989 -.612 1.393l-2.388 3.107h3" />
        </svg>
      );
      break;

    case 16:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-rating-16-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <path d="M7 15v-6" />
          <path d="M15.5 12h3" />
          <path d="M17 10.5v3" />
          <path d="M10 13.5v-3a1.5 1.5 0 0 1 1.5 -1.5h1" />
        </svg>
      );
      break;

    case 18:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-rating-18-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M11.5 10.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <path d="M11.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <path d="M7 15v-6" />
          <path d="M15.5 12h3" />
          <path d="M17 10.5v3" />
        </svg>
      );
      break;
    default:
      return;
      break;
  }
}
