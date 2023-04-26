import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./hooks/Login";
import { Home } from "./pages/Home";
import PrivateRoute from "./components/ProtectedRoute";
import AddTodo from "./components/AddTodo";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route exact path="/add-todo" element={<AddTodo />}>
          <Route path="/add-todo" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
