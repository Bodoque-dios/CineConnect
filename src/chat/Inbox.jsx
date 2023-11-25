import { useState } from "react";
import { Link } from "react-router-dom";

export default function Inbox() {
  const [id, setId] = useState("1");
  return (
    <>
      {/* esto deberia ser como un link o algo eso del header*/}
      <div className="relative h-screen w-full overflow-scroll bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950  font-libre">
        <div className="flex flex-row justify-center">
          <h1 className="my-4 ml-2 text-4xl font-bold text-naranjo">
            Conexiones
          </h1>
        </div>

        <section id="Chats" className="flex flex-col">
          <ChatBox id={id} />
        </section>
      </div>
    </>
  );
}

function ChatBox({ id }) {
  const [mensajes, setMensajes] = useState([]);

  return (
    <>
      <Link to={`/chat/${id}`}>
        <div className="m-4 flex items-center justify-between rounded-2xl bg-white/5 p-3">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/474x/f7/22/04/f722041ef4eac98c9ece0d19a3289f2f.jpg"
              alt=""
              className="mr-4 h-20 w-20 rounded-full"
            />
            <div>
              <h2 className="text-xl text-naranjo">Burro</h2>
              <h3 className="text-md text-naranjo">Mensaje</h3>
            </div>
          </div>

          <div className="flex h-8 w-8 items-center justify-center  rounded-full bg-red-500 text-naranjo">
            <h3 className="font-bold">+2</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
