import { useEffect, useState } from "react";
import { getTodos } from "apis/todos";
import useRedirect from "hooks/useRedirect";
import { TodoType } from "types/todo";
import * as S from "./index.styled";
import Card from "components/Card";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todo = () => {
  useRedirect();
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

  return (
    <S.Page>
      <Card width="600px" padding="2em 4em">
        <TodoForm getTodoList={getTodoList} />
        <S.TodoList>
          {todos.map((todo: TodoType) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              getTodoList={getTodoList}
            />
          ))}
        </S.TodoList>
      </Card>
    </S.Page>
  );
};

export default Todo;
