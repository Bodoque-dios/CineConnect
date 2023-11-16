import Card from "./Card";

export default function App() {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 p-2 ">
        <h1 className="text-4xl  text-white">TITULO</h1>
        <nav className="flex justify-around py-4 text-white">
          <a href="">Logo</a>
          <a href="">ALGO</a>
          <a href="">OTRA MAS</a>
          <a href="">asjusments svg</a>
        </nav>

        <Card />
      </div>
    </>
  );
}
