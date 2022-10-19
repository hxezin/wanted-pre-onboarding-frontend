import styled, { css } from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AuthBlock = styled.div<{ isToggle: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  transition: all 0.3s ease-in;

  &.login {
    left: 0px;
  }

  &.signup {
    left: 400px;
  }

  ${(props) =>
    props.isToggle &&
    css`
      &.login {
        left: -400px;
      }

      &.signup {
        left: 0;
      }
    `}
`;

const Header = styled.header`
  width: 100%;
  color: #cb2d3e;
  font-weight: 900;
  font-size: 30px;
  padding: 1em;
  padding-bottom: 0.5em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;
  width: 100%;
  padding: 2em 4em;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1em;
  margin-top: 2em;
`;

const ToggleBlock = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 25px;
  text-align: center;
  color: gray;
  font-size: 14px;
  margin-bottom: 1em;
`;

const ToggleButton = styled.button`
  border: none;
  color: #cb2d3e;
  cursor: pointer;
  background: transparent;
`;

export {
  Page,
  AuthBlock,
  Header,
  Form,
  ButtonBlock,
  ToggleBlock,
  ToggleButton,
};
