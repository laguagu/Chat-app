import "./App.css";
import HomeComponent from "./pages/Home";
import LogIn from "./pages/LogIn";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";

// Luo vielä layout sivusto polulla "/" ja määrittele HomeComponent, LogIn tämän polun lapsikomponenteiksi.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeComponent />} />
      <Route path="login" element={<LogIn />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
