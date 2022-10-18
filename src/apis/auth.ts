import instance from "./axios";
import { User } from "types/user";

export const signup = ({ email, password }: User) => {
  return instance.post("/auth/signup", {
    email,
    password,
  });
};

export const signin = ({ email, password }: User) => {
  return instance.post("/auth/signin", {
    email,
    password,
  });
};
