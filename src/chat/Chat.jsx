import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const burro = {
  1: "¿Puedo decirte algo? ¡Qué increíble reacción ante tal situación! Fantástico.",
  2: {
    2: "Claro, hablaba contigo. -",
    3: "Oye, estuviste enorme. Esos cuates me querían como burro de carga, pero llegaste así ¡bam! patitas pa que las quiero. Se jueron de volada. Fue muy chistoso verlos correr. -",
  },
  3: {
    4: "Que chido ser libre -",
    5: "Es que… -",
    6: "Yo no tengo amigos. -",
    7: "Y no pienso ir al bosque yo solito. -",
    8: "Hey tengo una ideota. -",
    9: "Me quedaré contigo. -",
    10: "Tu eres verdederamente una máquina de pelea. Haremos tronar a cualquiera. -",
  },
  4: {
    11: "Guau, eso sí que asusta. Y si el rugido no funciona, tu mal aliento seguro los desmaya. Necesitas unas pastillitas de menta, porque el hocico te apesta. -",
    12: "Tan grueso el tufo como cuando me eché unas fresas podridas -",
    13: "¡No, hombre! Pa inflar un zepelín con los gases que me salieron por detrás -",
  },
  5: {
    14: "Te diré por qué. -",
    15: "Porque estoy solito, no hay nadie aquí a mi lado. No habrá problemas hoy. De mí ya se han burlado. Amigos debes tener. -",
  },
  6: "¡Wow! Solo un amigo dice la verdad tan cruda -",
  7: "¿Eres…...muy alto? -",
  8: "Nones -",
  9: {
    19: "¿De veritas, de veritas? -",
    20: "Hasta me caes bien. ¿Cómo te llamas? -",
  },
  10: {
    21: "¡Shrek! -",
    22: "¿Sabes que me gusta de ti, Shrek? Que eres de los cuates a los que les vale un comino lo que los demás piensen de ti. Eso es chido. Mis respetos. Eres una buena bestia. -",
    23: "Blee mira eso. Quien querría vivir en ese cuchitril. -",
  },
  11: {
    24: "¡Oh, es adorable y hermoso! Eres un gran decorador…lo que alguien con talento puede hacer con poco presupuesto. -",
    25: "¡Oh, qué linda piedra! Un detalle soberbio. -",
    26: "¿Cuidado con el ogro? ¿No creo que tengas muchos amigos o sí? -",
  },
  12: {
    27: "Ah, a mí también, es otra cosa que tenemos en común. Odio cuando alguien está dando lata. Le echas las indirectas y como no entiende pues no se va. Y luego el silencio a poco no",
    28: "¿Puedo quedarme?",
  },
};

const Chat = () => {
  // useParams hook from React Router is used to access the parameters in the URL
  const { id } = useParams();
  const [messages, setMessages] = useState([
    { mensaje: "Hola", wasSent: true },
    { mensaje: "Hola", wasSent: false },
  ]);
  const [messageIndex, setMessageIndex] = useState(1);
  const addmesage = (message, wasSent = true) => {
    console.log(messages);
    setMessages([...messages, { mensaje: message, wasSent: wasSent }]);
  };
  const response = () => {
    const mymessages = burro[messageIndex];
    if (mymessages instanceof String) {
      addmesage(mymessages);
    } else if (mymessages instanceof Object) {
      const keys = Object.keys(mymessages);
      let delay = 0;
      for (let i = 0; i < keys.length; i++) {
        addmesage(mymessages[i], false);
      }
    }
    setMessageIndex(messageIndex + 1);
    console.log(mymessages);
  };

  useEffect(() => {
    
    setInterval(() => {response();}, 1000);
  }, []);

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900  to-primary-950 font-libre">
      <div className="flex items-center justify-between">
        <div className="m-4 flex items-center">
          <img
            src="https://i.pinimg.com/474x/f7/22/04/f722041ef4eac98c9ece0d19a3289f2f.jpg"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <h1 className="pl-3 text-2xl text-naranjo">Burro</h1>
        </div>
        <Link to="/chat">
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
        </Link>
      </div>

      <ChatBox messages={messages} />

      <ChatInput addmessage={addmesage}  response={response}/>
    </div>
  );
};

function Mensaje({ wasSent, mensaje }) {
  if (!wasSent) {
    return (
      <div className="ml-4 mt-2 h-fit  w-fit rounded bg-azul p-2 py-2 text-white">
        {mensaje}
      </div>
    );
  } else {
    return (
      <div className="mr-4 mt-2 h-fit w-fit self-end rounded bg-naranjo p-2 py-2">
        {mensaje}
      </div>
    );
  }
}

function ChatBox({ messages }) {
  return (
    <div className="flex min-h-[75vh] w-screen flex-col overflow-hidden overflow-y-auto text-lg ">
      {messages.map((message, key) => {
        return <Mensaje key={key} {...message} />;
      })}
    </div>
  );
}

function ChatInput({ addmessage, response }) {
  const handleSubmmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;

    if (message !== "") {
      addmessage(message);
      e.target[0].value = "";
    }
    response()
    
  };


  return (
    <form
      className="z-20 mt-10 flex w-full items-center justify-center px-4"
      onSubmit={handleSubmmit}
    >
      <input
        type="text"
        className="h-10 w-full rounded-full bg-midnight-blue-700 pl-4 text-lg text-white placeholder-white"
        placeholder="Escribe un mensaje"
      />
      <button className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-naranjo">
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
    </form>
  );
}

const shrek = {
  1: "¿Estás hablando con... migo? -",
  2: "Genial, que gusto",
  3: "Ahora, ¿por qué no te vas a celebrar tu libertad con tus amigos?-",
  4: "WAAAAAAAAA",
  5: "¡Por que esta siguiéndome!",
  6: {
    "15s": "¡YA DEJA DE CANTAR!",
    "16s": "Ahora entiendo por qué no tienes amigos. -",
  },
  7: {
    "16s2": "Escucha, pequeño burro ¡Mirame bien! -",
    "16s3": "¿Ya viste que soy? -",
  },
  8: {
    "18s": "Noooooooooooo, ¡Soy un ogro!. -",
    "18s2": "Si te portas mal, el ogro te va a comer, ¿Eso no te molesta?",
  },
  9: "¿Deveras? -",
  10: "ehhh, Shrek -",
  11: "Ese cuchitril es mi hogar",
  12: "Me gusta mi privacidad",
};

export default Chat;
