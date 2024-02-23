import Button from "./Button";
import Square from "./Square";

const Modal = ({ winner, resetGame}) => {
  return (
    <section className='absolute w-screen h-screen top-0 left-0 grid place-items-center bg-bright-turquoise-200 opacity-95'>
      <div className='bg-bright-turquoise-500 h-72 w-72 rounded-lg flex flex-col justify-center items-center gap-5'>
        <h2 className='text-white text-3xl'>
          {winner === false ? "Empate" : "Gano:"}
        </h2>
        <header>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <Button handleClick={resetGame} text='Reset Game' />
        </footer>
      </div>
    </section>
  );
};

export default Modal;
