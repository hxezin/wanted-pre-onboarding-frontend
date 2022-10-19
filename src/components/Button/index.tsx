import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  border?: string;
  color?: string;
  backgroundColor?: string;
  hoverBackground?: string;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const RedButton = styled.button<ButtonType>`
  width: 70px;
  height: 30px;
  color: white;
  font-size: 15px;
  background-color: #cd505c;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;

  &:hover {
    background-color: #cf404f;
  }

  &:active {
    background-color: #cb2d3e;
  }
`;

const GrayButton = styled(RedButton)`
  color: #9e9e9e;
  font-size: 15px;
  background-color: #eeeeee;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }

  &:active {
    background-color: #eeeeee;
  }
`;

const Button = ({ onClick, children, disabled, ...props }: ButtonType) => {
  return (
    <>
      {disabled ? (
        <GrayButton onClick={onClick} {...props}>
          {children}
        </GrayButton>
      ) : (
        <RedButton onClick={onClick} {...props}>
          {children}
        </RedButton>
      )}
    </>
  );
};

export default Button;
