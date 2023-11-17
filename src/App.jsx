import Card from "./Card";

export default function App() {
  return (
    <>
      <div className="from-primary-950 via-primary-900 to-primary-950 font-libre h-screen w-full bg-gradient-to-b p-2 ">
        <div className="flex flex-row justify-between">
        <h1 className="text-4xl my-4 ml-2 font-bold text-naranjo">Yo Reciclo</h1>
        <a href="#">
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
        </a>

        </div>
        <nav className="flex justify-around py-4 text-white"></nav>
        <Card />
      </div>
    </>
  );
}
