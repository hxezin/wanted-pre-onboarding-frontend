import { useState } from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  font-size: 18px;
  padding: 10px;
  -webkit-appearance: none;
  display: block;
  background: transparent;
  color: black;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;

  &:focus {
    outline: none;
    border-bottom: 1px solid transparent;
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #cb2d3e;
    transition: all 0.2s ease;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }
  ${InputBlock}:focus ~ .bar:before, ${InputBlock}:focus ~ .bar:after {
    width: 50%;
  }
  ${InputBlock}:focus ~ .bar {
    animation: inputHighlighter 0.3s ease;
  }
  @keyframes inputHighlighter {
    from {
      background: #cb2d3e;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

const Label = styled.label`
  color: black;
  font-size: 15px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: all 0.2s ease;
  ${InputBlock}:focus ~ &, ${InputBlock}.used ~ & {
    top: -15px;
    left: -2px;
    transform: scale(0.8);
    color: #cb2d3e;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ text, ...props }: Props) => {
  const [className, setClassName] = useState("");

  const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value) {
      setClassName("used");
    } else {
      setClassName("");
    }
  };

  return (
    <Container>
      <InputBlock className={className} onBlur={blurHandler} {...props} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <Label>{text}</Label>
    </Container>
  );
};

export default Input;
