import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "apis/auth";
import * as S from "./index.styled";
import { setToken } from "utils/token";
import useRedirect from "hooks/useRedirect";
import useValidate from "hooks/useValidate";
import Input from "components/Input";
import Button from "components/Button";
import AuthCard from "./AuthCard";

const Auth = () => {
  useRedirect();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const isValid = useValidate({ email, password });
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup({ email, password })
      .then(() => {
        setIsToggle(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <S.Page>
      <AuthCard>
        <S.AuthBlock className="login" isToggle={isToggle}>
          <S.Header>Login</S.Header>
          <S.Form onSubmit={handleLogin}>
            <Input text="EMAIL" onChange={(e) => setEmail(e.target.value)} />
            <Input
              text="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button disabled={!isValid}>로그인</Button>
          </S.Form>
        </S.AuthBlock>

        <S.AuthBlock className="signup" isToggle={isToggle}>
          <S.Header>Signup</S.Header>
          <S.Form onSubmit={handleSignup}>
            <Input text="EMAIL" onChange={(e) => setEmail(e.target.value)} />
            <Input
              text="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button disabled={!isValid}>회원가입</Button>
          </S.Form>
        </S.AuthBlock>
        {isToggle ? (
          <S.ToggleBlock>
            <span>Already have an account, </span>
            <S.ToggleButton onClick={handleToggle}>Login</S.ToggleButton>
          </S.ToggleBlock>
        ) : (
          <S.ToggleBlock>
            <span>Not a member yet? </span>
            <S.ToggleButton onClick={handleToggle}>Signup</S.ToggleButton>
          </S.ToggleBlock>
        )}
      </AuthCard>
    </S.Page>
  );
};

export default Auth;
