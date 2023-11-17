import { doc } from "prettier";
import { useState } from "react";

export default function SideNav({}) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisbility = () => {
        setIsVisible(!isVisible);
        document.getElementById("side-nav").classList.toggle("translate-x-[50vw]");

    }


  return (
    <>
      <div className="relative z-10 flex flex-col transition-all">
        <button onClick={toggleVisbility}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="m-4 my-5"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#FFC300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        <div id="side-nav" className="absolute right-0 z-20 m-0 flex h-screen w-[50vw] flex-col justify-between bg-azul transition-all translate-x-[50vw]">
          <div>
            <span className="grid" onClick={toggleVisbility}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon-tabler-x m-2 mt-3 justify-self-end"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffbf00"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </span>

            <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/8Km9tLL.png"
                  className="m-4 h-24 w-24 rounded-full"
                />
                <h2 className="text-3xl text-naranjo"> NOMBRE</h2>
            </div>

            <div className="bg-naranjo w-10/12 h-0.5 m-auto rounded my-4 "> </div>

            <div className="flex flex-col items-center pt-4">
                <h2 className="text-3xl text-naranjo p-2" >Opcion</h2>
                <h2 className="text-3xl text-naranjo p-2" >Opcion</h2>
                <h2 className="text-3xl text-naranjo p-2" >Opcion</h2>
                <h2 className="text-3xl text-naranjo p-2" >Opcion</h2>
                <h2 className="text-3xl text-naranjo p-2" >Opcion</h2>
            </div>

          </div>

          <div id="bottom-thing" className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-tabler-logout m-2 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffbf00"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
