const Square = ({ children, isSelected, updateBoard, index }) => {
  const styles = isSelected
    ? "text-white w-[80px] h-[80px] bg-bright-turquoise-500 rounded-md text-5xl p-4 flex justify-center items-center"
    : "bg-white w-[80px] h-[80px] border-2 border-bright-turquoise-700 rounded-md text-5xl text-bright-turquoise-800 p-4 flex justify-center items-center";

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={styles} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;
