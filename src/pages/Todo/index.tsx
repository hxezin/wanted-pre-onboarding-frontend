import { createTodo, getTodos } from "apis/todos";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((response) => {
      setTodos(response.data);
    });
  }, []);

  const getTodoList = () => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() === "") return;

    await createTodo(todo)
      .then(() => {
        setTodo("");
        getTodoList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Todo"
        />
        <button>추가</button>
      </form>
      <TodoList todos={todos} getTodoList={getTodoList} />
    </Page>
  );
};

export default Todo;
