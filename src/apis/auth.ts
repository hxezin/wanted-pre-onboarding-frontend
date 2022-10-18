import instance from "./axios";
import { User } from "types/user";

export const signup = ({ email, password }: User) => {
  return instance.post("/auth/signup", {
    email,
    password,
  });
};
