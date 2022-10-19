import { signup } from "apis/auth";
import Button from "components/Button";
import Card from "components/Card";
import Input from "components/Input";
import useValidate from "hooks/useValidate";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./index.styled";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = useValidate({ email, password });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup({ email, password })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Page>
      <Card>
        <S.Header>Sign up</S.Header>
        <S.Form onSubmit={handleSubmit}>
          <Input text="EMAIL" onChange={(e) => setEmail(e.target.value)} />
          <Input
            text="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.ButtonBlock>
            <Button disabled={!isValid}>회원가입</Button>
            <Link to="/">
              <Button>로그인</Button>
            </Link>
          </S.ButtonBlock>
        </S.Form>
      </Card>
    </S.Page>
  );
};

export default SignUp;
