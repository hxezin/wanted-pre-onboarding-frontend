import { css } from "styled-components";
import Card from "components/Card";

const customCardStyle = css`
  position: relative;
  height: 350px;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
`;

interface Props {
  children: React.ReactNode;
}

const AuthCard = ({ children }: Props) => {
  return <Card customCardStyle={customCardStyle}>{children}</Card>;
};

export default AuthCard;
