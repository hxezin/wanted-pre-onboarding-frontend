import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
  width: 100%;
  margin: 1em;
`;

const TodoList = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { Page, Form, TodoList };
