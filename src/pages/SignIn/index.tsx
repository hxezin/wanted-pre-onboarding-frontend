import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signin } from "apis/auth";

import styled from "styled-components";
import { setToken } from "utils/token";
import useRedirect from "hooks/useRedirect";
import useValidate from "hooks/useValidate";

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1em;
`;

const SignIn = () => {
  useRedirect();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isValid, setIsValid] = useState(false);

  const isValid = useValidate({ email, password });

  const navigate = useNavigate();

  // const validityCheck = () => {
  //   email.includes("@") && password.length >= 8
  //     ? setIsValid(true)
  //     : setIsValid(false);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signin({ email, password })
      .then((response) => {
        console.log("로그인 성공");
        setToken(response.data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="EMAIL"
          onChange={(e) => setEmail(e.target.value)}
          // onKeyUp={validityCheck}
        />
        <input
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          // onKeyUp={validityCheck}
        />
        <ButtonBlock>
          <button disabled={!isValid}>로그인</button>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </ButtonBlock>
      </Form>
    </Page>
  );
};

export default SignIn;
