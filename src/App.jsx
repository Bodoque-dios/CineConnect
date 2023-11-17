import Card from "./Card";
import SideNav from "./SideNav";

export default function App() {
  return (
    <>
      <div className="from-primary-950 via-primary-900 to-primary-950 font-libre h-screen w-full bg-gradient-to-b  overflow-hidden">
        <div className="flex flex-row justify-between">
        <h1 className="text-4xl my-4 ml-2 font-bold text-naranjo">Yo Reciclo</h1>
        <SideNav />

        </div>
        <nav className="flex justify-around py-4 text-white"></nav>
        <Card/>
      </div>
    </>
  );
}
