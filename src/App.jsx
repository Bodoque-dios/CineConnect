import Card from './Card'


export default function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-t from-black to-slate-800 p-2'>
      <h1 className='text-white  text-4xl'>TITULO</h1>
      <nav className='text-white flex justify-around py-4'>
        <a href="">Logo</a>
        <a href="">ALGO</a>
        <a href="">OTRA MAS</a>
        <a href="">asjusments svg</a>

      </nav>
      <Card />
    </div>
  )
}