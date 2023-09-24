import "./App.css";
import HomeComponent from "./pages/Home";
import LogIn from "./pages/LogIn";
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
        <Route path="login" element={<LogIn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
