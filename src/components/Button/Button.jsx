import "./style.css";
const Button = ({ text, className, handelAddTodo }) => {
  return (
    <>
      <button onClick={handelAddTodo} className={`btn ${className}`}>
        {text}
      </button>
    </>
  );
};

export default Button;
