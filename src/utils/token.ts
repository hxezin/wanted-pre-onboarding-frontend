export const setToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const removeToken = () => {
  localStorage.removeItem("accessToken");
};
