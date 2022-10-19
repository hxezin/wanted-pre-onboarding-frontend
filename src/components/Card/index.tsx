import styled, { CSSProp } from "styled-components";

interface CardType {
  width?: string;
  padding?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  customCardStyle?: CSSProp;
}

const CardContainer = styled.div<CardType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "400px")};
  border-radius: 1em;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#f4f7fc"};
  transition: all 0.2s ease;
  padding: ${({ padding }) => (padding ? padding : "0")};
  ${({ customCardStyle }) => customCardStyle && customCardStyle};
`;

const Card = ({ children, ...props }: CardType) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

export default Card;
