import React, { useEffect, useState } from "react";
export default function Card({ onDelete, data}) {
  const [style, setStyle] = useState({});

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

  return (
    <div
      style={style}
      className="mx-4 max-h-fit flex w-full max-w-[400px] grow-0 animate-fade-in flex-col justify-center rounded-2xl bg-transparent text-white backdrop-opacity-5 md:max-w-[350px]"
    >
      <div className="mb-3 rounded-2xl border-2 border-gray-900 bg-gray-950">
        <div className="relative flex flex-col">
          <div className="border-rojovintage-800 relative mb-2 overflow-hidden rounded-t-xl border-b-2">
            <img
              className="h-full w-full object-cover max-h-[555px]"
              src={`https://www.themoviedb.org/t/p/original/${data.img}`}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-black">
              <h2 className="font-inter absolute bottom-2 z-10 p-2 text-4xl font-semibold">
                {data.title}
              </h2>
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