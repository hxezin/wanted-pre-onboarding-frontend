import { Todo } from "types/todo";
import TodoItem from "../TodoItem";

import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

interface Props {
  todos: Todo[];
  getTodoList: () => void;
}

const TodoList = ({ todos, getTodoList }: Props) => {
  return (
    <Container>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          isCompleted={todo.isCompleted}
          getTodoList={getTodoList}
        />
      ))}
    </Container>
  );
};

export default TodoList;
