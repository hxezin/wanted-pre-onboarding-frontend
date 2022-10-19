import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  color: #cb2d3e;
  font-weight: 900;
  font-size: 30px;
  padding: 1em;
  padding-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  width: 100%;
  margin: 1em;
  padding: 2em 4em;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1em;
  margin-top: 2em;
`;

export { Page, Header, Form, ButtonBlock };
