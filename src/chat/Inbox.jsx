import{ useState } from "react";
import Header from "../components/Header";

export default function Inbox() {
  return (
    <>
      {/* esto deberia ser como un link o algo eso del header*/}
      <div className="min-h-screen w-full overflow-scroll bg-gradient-to-b from-primary-950 via-primary-951 to-primary-950">
        <Header />
        <div className="relative h-screen w-full font-inter">
          <div className="flex flex-row justify-start mx-4">
            <h1 className="mt-4 mb-1 text-2xl font-extrabold text-rojovintage-600">
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
      </div>
    </>
  );
}

function ChatBox() {

  const [mensajes, setMensajes] = useState([]);

  return (
    <>
      <div className="mx-4 my-1 flex items-center justify-between rounded-2xl text-white bg-gray-800 p-3">
        <div className="flex items-center">
          <img
            src="https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t500x500.jpg"
            alt=""
            className="mr-4 h-20 w-20 rounded-full border-2 border-rojovintage-500"
          />
          <div>
            <h2 className="text-xl">Borat Sagdiyev</h2>
            <h3 className="text-sm text-gray-400 overflow-hidden max-w-[200px] max-h-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maxime quis voluptatem, doloremque, quas modi quos neque quasi autem minus minima doloribus nihil consequuntur fugit odit illo? Mollitia, eum deleniti!
            </h3>
          </div>
        </div>

        <div className="text-naranjo border border-rojovintage-500 rounded-full w-10 h-10 flex justify-center items-center">
            <h3 className="">2</h3>
        </div>
      </div>
    </>
  );
}

