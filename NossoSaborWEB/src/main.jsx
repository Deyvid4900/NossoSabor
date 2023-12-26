import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registrar from "./pages/registrar/Registrar";
import Recipes from "./pages/recipes/Recipes";
import Sobre from "./pages/sobre/Sobre";
import Enviar from "./pages/EnviarReceita/EnviarReceita";

const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Home></Home>,
  },
  {
    path: "/Enviar" || "/enviar" ,
    element: <Enviar></Enviar>,
  },
  {
    path: "/Login" || "/login",
    element: <Login></Login>,
  },
  {
    path: "/Registrar" || "/registrar",
    element: <Registrar></Registrar>,
  },
  {
    path: "/Receitas" || "/receitas",
    element: <Recipes></Recipes>,
  },
  {
    path: "/Sobre" || "/sobre", 
    element: <Sobre></Sobre>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
