import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Registrar from "./pages/registrar/Registrar";
import Recipes from "./pages/recipes/Recipes";
import Sobre from "./pages/sobre/Sobre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Login",
    element: <Login></Login>,
  },
  {
    path: "/Registrar",
    element: <Registrar></Registrar>,
  },
  {
    path: "/Receitas",
    element: <Recipes></Recipes>,
  },
  {
    path: "/Sobre",
    element: <Sobre></Sobre>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
