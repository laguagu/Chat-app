import "./App.css";
import HomeComponent from "./pages/Home";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import SignIn from "./pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="login" element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
