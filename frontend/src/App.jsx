import "./App.css";
import HomeComponent from "./pages/Home";
import LogIn from "./pages/LogIn";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  Navigate,
} from "react-router-dom";


function ProtectedRoute({children}) { // Jos käyttäjä ei ole kirjautunut sovellukseen uudelleen ohjaus
  const userToken = localStorage.getItem("userToken");
  return(
    userToken ? children : <Navigate to={"/login"} replace={true} />
  );
}
// Luo vielä layout sivusto polulla "/" ja määrittele HomeComponent, LogIn tämän polun lapsikomponenteiksi.
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* Määrittele loader ominaisuus viestien hakuun ja käytä useLoaderData hookkia */}
      <Route path="/" element={<HomeComponent />} /> 
      <Route path="login" element={<LogIn />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomeComponent /></ProtectedRoute>} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </RouterProvider>
  );
}

export default App;
