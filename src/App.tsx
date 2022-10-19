import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
