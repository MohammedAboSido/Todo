import Todo from "../../components/Todo/Todo";
import "./style.css";
const TodoPage = () => {
  return (
    <div className="todoPageWrapper">
      <div className="container">
        <div className="todoPageContainer">
          <Todo />
        </div>
      </div>
    </div>
  );
};
export default TodoPage;
