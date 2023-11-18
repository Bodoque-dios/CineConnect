import { useParams } from "react-router-dom";

/**
 *
 * FALTA TERMINAR ESTO Y HACERLO DINAMICO
 *
 */

const Chat = () => {
  // useParams hook from React Router is used to access the parameters in the URL
  const { id } = useParams();

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900  to-primary-950 font-libre">
      <div className="flex items-center justify-between">
        <div className="m-4 flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Borat_in_Cologne.jpg/480px-Borat_in_Cologne.jpg"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <h1 className="pl-3 text-2xl text-naranjo">Borat Sagdiyev</h1>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-tabler-x m-4"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffbf00"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
      <div className="grid max-h-[75vh] w-screen overflow-hidden overflow-y-auto text-lg ">
        <Mensaje wasSent={true} mensaje="Hola" />
        <Mensaje wasSent={false} mensaje="Holaaa" />
        <Mensaje wasSent={true} mensaje="Como estas?" />
        <Mensaje wasSent={false} mensaje="Bien y tu?" />
        <Mensaje wasSent={true} mensaje="Bien" />
        <Mensaje wasSent={false} mensaje="Que bueno" />
        <Mensaje wasSent={true} mensaje="Si" />
        <Mensaje wasSent={false} mensaje="Si" />
        <Mensaje wasSent={true} mensaje="Si" />
        <Mensaje wasSent={false} mensaje="Si" />
        <Mensaje wasSent={true} mensaje="Lorem" />
        <Mensaje wasSent={true} mensaje="Hola" />
        <Mensaje wasSent={false} mensaje="Holaaa" />
        <Mensaje wasSent={true} mensaje="Como estas?" />
        <Mensaje wasSent={false} mensaje="Bien y tu?" />
        <Mensaje wasSent={true} mensaje="Lorem" />
        <Mensaje wasSent={true} mensaje="Hola" />
        <Mensaje wasSent={false} mensaje="Holaaa" />
        <Mensaje wasSent={true} mensaje="Como estas?" />
        <Mensaje wasSent={false} mensaje="Bien y tu?" />
      </div>

      <div className="z-20 flex w-full items-center justify-center px-4 mt-10">
        <input
          type="text"
          className="h-10 w-full rounded-full bg-midnight-blue-700 placeholder-white "
          placeholder="  Escribe un mensaje"
        />
        <button className="h-10 w-10 m-2 rounded-full bg-naranjo flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-telegram"
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
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

function Mensaje({ wasSent, mensaje }) {
  if (wasSent) {
    return (
      <div className="ml-4 w-fit rounded bg-azul p-2 py-3 text-white">
        {mensaje}
      </div>
    );
  } else {
    return (
      <div className="mr-4 w-fit justify-self-end rounded bg-naranjo p-2 py-3">
        {mensaje}
      </div>
    );
  }
}

function Write({ callback }) {
  return <div className="w-full bg-white"></div>;
}

export default Chat;
