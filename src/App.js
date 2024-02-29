import React from "react";
import {
  Routes,
  Route,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Home from "./Routing/home";
import About from "./Routing/about";
import Navik from "./Routing/Navigation/Links";

import Help from "./Routing/help";
import Faq from "./Routing/helpcompo/faq";
import Contact from "./Routing/helpcompo/contact";

const Navigator = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navik />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/help" element={<Help />}>
        <Route path="faq" element={<Faq />}></Route>{" "}
        {/* Use relative path "faq" instead of "/faq" */}
        <Route path="contact" element={<Contact />}></Route>{" "}
        {/* Use relative path "contact" instead of "/contact" */}
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={Navigator}>
      <Routes>
        <Route path="/" element={<Navik />} index />
      </Routes>
    </RouterProvider>
  );
}

export default App;
