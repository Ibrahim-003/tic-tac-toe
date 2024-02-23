const Button = ({ handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      className='px-4 py-2 rounded-xl bg-white hover:bg-bright-turquoise-50 border-2 border-bright-turquoise-700 text-bright-turquoise-800'
    >
      {text}
    </button>
  );
};

export default Button;
