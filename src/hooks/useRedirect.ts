import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "utils/token";

const useRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();

    if (token) {
      navigate("/todo");
    } else {
      navigate("/");
    }
  }, [navigate]);
};

export default useRedirect;
