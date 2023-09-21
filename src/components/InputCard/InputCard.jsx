import Button from "../Button/Button";
import "./style.css";
const InputCard = ({ setInputValue, inputValue, handelAddTodo }) => {
  return (
    <div className="inputCardWrapper">
      <input
        type="text"
        placeholder="What Would you like to do?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <Button
        handelAddTodo={handelAddTodo}
        text={"Add"}
        className={"bg-blue"}
      />
    </div>
  );
};

export default InputCard;
