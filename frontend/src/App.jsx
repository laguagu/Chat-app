import "./App.css";
import HomeComponent from "./pages/Home";
import Login from "./pages/Login";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import SignIn from "./pages/SigIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="login" element={<SignIn/>}/>
        <Route path="test" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
