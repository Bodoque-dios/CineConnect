import{ useState } from "react";

export default function Inbox() {
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
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />
          <ChatBox />


        </section>
      </div>
    </>
  );
}

function ChatBox() {

    const [mensajes, setMensajes] = useState([]);

  return (
    <>
      <div className="m-4 flex items-center justify-between rounded-2xl bg-white/5 p-3">
        <div className="flex items-center">
          <img
            src="https://pbs.twimg.com/media/FvLcK71XoAEQupc.jpg"
            alt=""
            className="mr-4 h-20 w-20 rounded-full"
          />
          <div>
            <h2 className="text-xl text-naranjo">Borat Sagdiyev</h2>
            <h3 className="text-md text-naranjo">Mensaje</h3>
          </div>
        </div>

        <div className="text-naranjo bg-red-500 rounded-full w-8 h-8  flex justify-center items-center">
            <h3 className="font-bold">+2</h3>
        </div>
      </div>
    </>
  );
}

