import { useState } from "react";
import { TURNS } from "../consts/consts.js";
import { checkWinner, checkEndGame } from "../utils/utils.js";
import confetti from "canvas-confetti";

import Square from "./Square.jsx";
import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

const Board = () => {
  const [board, setBoard] = useState(() => {
    // el uso del local storage se hace dentro con el fin de evitar repetidas cargas del mismo en cada renderizado
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.x;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    //updating board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //updating turn
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // storage in localStorage
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    
    //check winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  };

  return (
    <>
      <section className='w-fit mx-auto flex flex-col gap-12'>
        <article className='flex justify-center'>
          <Button handleClick={resetGame} text='Reset Game' />
        </article>
        <article className='grid grid-cols-3 grid-rows-3 justify-items-center items-center gap-4'>
          {board.map((el, index) => {
            return (
              <Square key={index} updateBoard={updateBoard} index={index}>
                {el}
              </Square>
            );
          })}
        </article>
        <article className='flex justify-center gap-4'>
          <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
          <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
        </article>
      </section>
      {winner !== null && <Modal winner={winner} resetGame={resetGame} />}
    </>
  );
};

export default Board;
