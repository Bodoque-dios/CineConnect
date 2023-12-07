import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Inbox() {
  const [id, setId] = useState("1");
  return (
    <>
      <div className="via-primary-951 min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary-950 to-primary-950">
        <Header />
        <div className="relative h-full w-full font-inter">
          <div className="mx-4 flex flex-row justify-start">
            <h1 className="mb-1 mt-4 text-2xl font-extrabold text-rojovintage-600 md:text-4xl">
              Conexiones
            </h1>
          </div>

          <div 
            id="Chats" 
            className="flex flex-col justify-start overflow-y-scroll"
          >
            <ChatBox id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

function ChatBox({ id }) {
  const [mensajes, setMensajes] = useState([]);

  return (
    <>
      <Link to={`/chat/${id}`}>
        <div className="mx-4 my-1 flex min-w-[300px] items-center justify-between rounded-2xl bg-gray-800 p-3 text-white md:max-w-2xl md:m-auto">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/474x/f7/22/04/f722041ef4eac98c9ece0d19a3289f2f.jpg"
              alt=""
              className="mr-4 h-14 w-14 rounded-full border-2 border-rojovintage-500"
            />
            <div>
              <h2 className="text-xl">Burro</h2>
              <h3 className="max-h-[20px] max-w-[45vw] overflow-hidden truncate text-sm text-gray-400">
                ¿Puedo decirte algo? ¡Qué increíble reacción ante tal situación!
                Fantástico.
              </h3>
            </div>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-rojovintage-500 text-naranjo">
            <h3 className="">1</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
