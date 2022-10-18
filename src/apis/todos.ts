import instance from "./axios";

export const createTodo = (todo: string) => {
  return instance.post("/todos", {
    todo,
  });
};

export const getTodos = () => {
  return instance.get("/todos");
};

export const updateTodo = (id: number, todo: string, isCompleted: boolean) => {
  return instance.put(`todos/${id}`, {
    todo,
    isCompleted,
  });
};

export const deleteTodo = (id: number) => {
  return instance.delete(`todos/${id}`);
};
