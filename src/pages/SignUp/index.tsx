import { signup } from "apis/auth";
import useValidate from "hooks/useValidate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isValid = useValidate({ email, password });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup({ email, password })
      .then(() => {
        console.log("회원가입 성공");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit}>
        <input placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!isValid}>회원가입</button>
      </Form>
    </Page>
  );
};

export default SignUp;
