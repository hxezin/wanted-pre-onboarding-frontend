import { useState } from "react";
import { TodoType } from "types/todo";
import * as S from "./index.styled";
import { deleteTodo, updateTodo } from "apis/todos";
import { FiCheckCircle } from "react-icons/fi";

interface Props extends TodoType {
  getTodoList: () => void;
}

const TodoItem = ({ id, todo, isCompleted, getTodoList }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(todo);

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
    getTodoList();
  };

  const handleDelete = async () => {
    await deleteTodo(id).then(() => {
      getTodoList();
    });
  };

  return (
    <S.Container>
      {isEdit ? (
        <>
          <S.MainBlock>
            <S.Checkbox
              isCompleted={isCompleted}
              onClick={handleCheck}
              title="Check todo"
            >
              {isCompleted && <FiCheckCircle />}
            </S.Checkbox>
            <S.Input
              autoFocus
              defaultValue={todo}
              onChange={(e) => setModifiedTodo(e.target.value)}
              placeholder="Todo"
            />
          </S.MainBlock>
          <S.ButtonBlock className="modify">
            <S.Button onClick={handleUpdate}>제출</S.Button> |
            <S.Button onClick={() => setIsEdit(!isEdit)}>취소</S.Button>
          </S.ButtonBlock>
        </>
      ) : (
        <>
          <S.MainBlock>
            <S.Checkbox
              isCompleted={isCompleted}
              onClick={handleCheck}
              title="Check todo"
            >
              {isCompleted && <FiCheckCircle />}
            </S.Checkbox>
            <S.TextBox>{todo}</S.TextBox>
          </S.MainBlock>
          <S.ButtonBlock>
            <S.Button onClick={() => setIsEdit(!isEdit)}>수정</S.Button> |
            <S.Button onClick={handleDelete}>삭제</S.Button>
          </S.ButtonBlock>
        </>
      )}
    </S.Container>
  );
};

export default TodoItem;
