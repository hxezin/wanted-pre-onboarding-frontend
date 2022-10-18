import { Todo } from "types/todo";

import styled from "styled-components";
import { useState } from "react";
import { deleteTodo, updateTodo } from "apis/todos";

const Container = styled.section`
  display: flex;
`;

interface Props extends Todo {
  getTodoList: () => void;
}

const TodoItem = ({ id, todo, isCompleted, getTodoList }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState("");

  const handleUpdate = async () => {
    if (modifiedTodo.trim() === "") return;
    await updateTodo(id, modifiedTodo, isCompleted).then(() => {
      getTodoList();
      setIsEdit(!isEdit);
    });
  };

  const handleCheck = async () => {
    isCompleted = !isCompleted;
    await updateTodo(id, todo, isCompleted);
  };

  const handleDelete = async () => {
    await deleteTodo(id).then(() => {
      getTodoList();
    });
  };

  return (
    <Container>
      <input
        type="checkbox"
        defaultChecked={isCompleted}
        onClick={handleCheck}
      />
      {isEdit ? (
        <>
          <input
            autoFocus
            defaultValue={todo}
            onChange={(e) => setModifiedTodo(e.target.value)}
            placeholder="Todo"
          />
          <button onClick={handleUpdate}>제출</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      ) : (
        <>
          <div>{todo}</div>
          <button onClick={() => setIsEdit(!isEdit)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </Container>
  );
};

export default TodoItem;
