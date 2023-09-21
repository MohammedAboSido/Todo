import axios from "axios";
import { useEffect, useState } from "react";
import InputCard from "../InputCard/InputCard";
import TodoCard from "../TodoCard/TodoCard";
import "./style.css";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todoNumber, setTodoNumber] = useState(5);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(data.slice(0, todoNumber));
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [todoNumber]);

  const handelAddTodo = () => {
    const newTodo = {
      completed: false,
      id: Math.round(200 + Math.random() * 1000),
      title: inputValue,
    };
    if (inputValue.trim().length) {
      setData((prev) => [newTodo, ...prev]);
      setInputValue("");
    }
  };

  const handelDeleteTodo = (id) => {
    setData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handelStatusTodo = (id) => {
    setData((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handelTodoNumber = () => {
    setTodoNumber((prev) => (prev <= 200 ? prev + 40 : prev));
  };

  return (
    <>
      <div className="todoWrapper">
        <h1 className="main-title">Todo List</h1>
        <div className="todoListContainer">
          <InputCard
            inputValue={inputValue}
            setInputValue={setInputValue}
            handelAddTodo={handelAddTodo}
          />
          <TodoCard
            data={data}
            loading={loading}
            handelDeleteTodo={handelDeleteTodo}
            handelStatusTodo={handelStatusTodo}
            handelTodoNumber={handelTodoNumber}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
