import React, { useEffect, useState } from "react";
export default function Card({ onDelete, data}) {
  const [style, setStyle] = useState({});

  const genreInfo = {
    28: { name: 'Action', color: 'bg-red-500' },
    12: { name: 'Adventure', color: 'bg-yellow-500' },
    16: { name: 'Animation', color: 'bg-green-500' },
    35: { name: 'Comedy', color: 'bg-blue-500' },
    80: { name: 'Crime', color: 'bg-purple-500' },
    99: { name: 'Documentary', color: 'bg-indigo-500' },
    18: { name: 'Drama', color: 'bg-pink-500' },
    10751: { name: 'Family', color: 'bg-yellow-300' },
    14: { name: 'Fantasy', color: 'bg-orange-500' },
    36: { name: 'History', color: 'bg-teal-500' },
    27: { name: 'Horror', color: 'bg-red-800' },
    10402: { name: 'Music', color: 'bg-blue-800' },
    9648: { name: 'Mystery', color: 'bg-purple-800' },
    10749: { name: 'Romance', color: 'bg-pink-800' },
    878: { name: 'Science Fiction', color: 'bg-green-800' },
    10770: { name: 'TV Movie', color: 'bg-yellow-800' },
    53: { name: 'Thriller', color: 'bg-red-600' },
    10752: { name: 'War', color: 'bg-green-600' },
    37: { name: 'Western', color: 'bg-orange-800' },
  };


  const genre = data.genres

  const [tags, setTags] = useState([
     //lol, cambiar esto
  ]);

  const swipeLeft = () => {
    setStyle({
      transform: `translate(-120vw) rotate(-20deg)`,
      transition: "transform 0.2s ease",
    });
    setTimeout(() => {
      onDelete();
    }, 500);
  };
  const swipeRight = () => {
    setStyle({
      transform: `translate(120vw) rotate(20deg)`,
      transition: "transform 0.2s ease",
    });
    setTimeout(() => {
      onDelete();
    }, 500);
  };

  /*const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjVjNzRhNjUwYzMyZmY5YzkzOGQ3NmE0ZTFkYTYxNCIsInN1YiI6IjY1NTYzODRmMDgxNmM3MDExYTBjNGNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I3NmkHWwFLjYaNcRQywFtJYgHrWItIaYvY34cIwOrEI'

*/

  return (
    <div
      style={style}
      className="mx-4 flex w-full max-w-[400px] grow-0 animate-fade-in flex-col justify-center rounded-2xl bg-transparent text-white backdrop-opacity-5 md:max-w-[350px]"
    >
      <div className="mb-3 rounded-2xl border-2 border-gray-900 bg-gray-950">
        <div className="relative flex flex-col">
          <div className="border-rojovintage-800 relative mb-2 overflow-hidden rounded-t-xl border-b-2">
            <img
              className="h-full w-full object-cover"
              src={`https://www.themoviedb.org/t/p/original/${data.img}`}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-black">
              <h2 className="font-inter absolute bottom-2 z-10 p-2 text-4xl font-semibold">
                {data.title}
              </h2>
              <div className="Tags absolute bottom-2 flex py-2">
                {/* Falta ver el overflow*/}
                {tags}
              </div>
            </div>
          </div>
        </div>

        <p className="mb-3 max-h-[6.3rem] px-3 text-justify text-sm overflow-hidden">
          {data.overview}
        </p>
      </div>
      <div className="bg-transparent">
        <Controls left={swipeLeft} right={swipeRight} />
      </div>
    </div>
  );
}

function Tag({ name, color }) {
  return (
    <div className={`mx-2 rounded-full p-2 ${color}`}>
      <h3 className="text-center text-xs font-semibold">{name}</h3>
    </div>
  );
}

function Controls({ left, right }) {
  return (
    <div className="flex justify-around rounded-full ">
      <button className="m-2 rounded-full bg-lime-500 p-2" onClick={left}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 30 30"
          stroke=""
          fill=""
        >
          <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"></path>
        </svg>
      </button>

      <button className="m-2 rounded-full bg-rose-600 p-2 " onClick={right}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 5L5 19M5.00001 5L19 19"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function Rating({ age }) {
  age = parseInt(age, 10);

  // DPS SACAR ESTO
  const ages = [12, 16, 18];
  age = ages[Math.floor(Math.random() * ages.length)];

  switch (age) {
    case 12:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-rating-12-plus"
          width="30"
          height="33"
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
          width="30"
          height="33"
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
          width="30"
          height="33"
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
