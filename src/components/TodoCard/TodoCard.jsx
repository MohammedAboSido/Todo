import Table from "../Table/Table";
import "./style.css";
const TodoCard = ({
  data,
  loading,
  handelDeleteTodo,
  handelStatusTodo,
  handelTodoNumber,
}) => {
  return (
    <div className="todoCardWrapper">
      <h4 className="main-title">Todo List</h4>
      <Table
        data={data}
        loading={loading}
        handelDeleteTodo={handelDeleteTodo}
        handelStatusTodo={handelStatusTodo}
      />
      <div className="showMoreWrapper">
        <button
          onClick={() => {
            handelTodoNumber();
          }}
          className="showMore"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
