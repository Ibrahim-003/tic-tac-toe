import Board from "./components/Board.jsx";

function App() {
  return (
    <main className='min-h-screen w-full py-4 px-6 flex flex-col justify-center bg-bright-turquoise-100'>
      <section className='flex flex-col gap-20'>
        <h1 className='text-3xl text-bright-turquoise-800 text-center'>
          Tic-Tac-Toe
        </h1>
        <Board />
      </section>
    </main>
  );
}

export default App;
