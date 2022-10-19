import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signin } from "apis/auth";

import * as S from "./index.styled";
import { setToken } from "utils/token";
import useRedirect from "hooks/useRedirect";
import useValidate from "hooks/useValidate";
import Card from "components/Card";
import Input from "components/Input";
import Button from "components/Button";

const SignIn = () => {
  useRedirect();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValid = useValidate({ email, password });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signin({ email, password })
      .then((response) => {
        setToken(response.data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Page>
      <Card>
        <S.Header>Login</S.Header>
        <S.Form onSubmit={handleSubmit}>
          <Input text="EMAIL" onChange={(e) => setEmail(e.target.value)} />
          <Input
            text="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.ButtonBlock>
            <Button disabled={!isValid}>로그인</Button>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </S.ButtonBlock>
        </S.Form>
      </Card>
    </S.Page>
  );
};

export default SignIn;
