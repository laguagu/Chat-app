import "./App.css";
import HomeComponent from "./pages/Home";
import Login from "./pages/Login";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
