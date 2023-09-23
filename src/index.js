import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import About from "./pages/About";
import StarWars from "./pages/StarWars";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/starwars",
    element: <StarWars/>,
  },
  {
    path: "/contacts",
    element: <Contacts/>,
  }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
