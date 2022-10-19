import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1em 1em;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #ecebeb;
  }
`;

const MainBlock = styled.main`
  display: flex;
  column-gap: 1em;
  width: 80%;
`;

const Checkbox = styled.div<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  max-width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #cb2d3e;
  font-size: 25px;
  cursor: pointer;

  ${(props) =>
    props.isCompleted &&
    css`
      border: none;
      color: #cb2d3e;
    `}
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

const Input = styled.input`
  width: 86%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #cb2d3e;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const ButtonBlock = styled.div`
  display: none;

  ${Container}:hover &, &.modify {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    color: #bcbcbc;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #cb2d3e;
  font-size: 14px;
  cursor: pointer;
`;

export { Container, MainBlock, Checkbox, TextBox, Input, ButtonBlock, Button };
