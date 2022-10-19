import { useState } from "react";
import { createTodo } from "apis/todos";
import styled from "styled-components";
import Input from "components/Input";
import Button from "components/Button";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
  width: 100%;
  margin: 1em;
`;

interface Props {
  getTodoList: () => void;
}

const TodoForm = ({ getTodoList }: Props) => {
  const [todo, setTodo] = useState("");

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
    <Form onSubmit={handleSubmit}>
      <Input
        autoFocus
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        text="Todo"
      />
      <Button>추가</Button>
    </Form>
  );
};

export default TodoForm;
