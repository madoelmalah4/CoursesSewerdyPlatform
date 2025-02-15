import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import NavbarLayOut from "./Layouts/NavbarLayOut";
import About from "./Pages/About";
import IsAuthLayOut from "./Layouts/IsAuthLayOut";
import Courses from "./Pages/Courses";
import NoMatchRoute from "./Pages/NoMatchRoute";
import Login from "./Pages/Login";
import Work from './Pages/Work.jsx'
import AdminNavbarLayOut from "./Layouts/AdminNavbarLayOut.jsx";
import Orders from "./Pages/Orders.jsx";
const App = () => {
  return (
    <Routes>
      <Route element={<NavbarLayOut />}>
        <Route path="/" index element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/login" element={<Login />} />
        <Route element={<IsAuthLayOut />}>
          <Route path="/courses" element={<Courses />} />
        </Route>

        <Route path="*" element={<NoMatchRoute />} />
      </Route>

      <Route element={<AdminNavbarLayOut />}>
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
