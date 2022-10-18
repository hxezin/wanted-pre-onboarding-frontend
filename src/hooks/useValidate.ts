import { useEffect, useState } from "react";
import { User } from "types/user";

const useValidate = ({ email, password }: User) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, password]);

  return isValid;
};

export default useValidate;
