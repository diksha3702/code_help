import React, { useEffect, useState } from "react";
import Login from "./container/login";
import AuthProvider from "./utils/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Profile from "./container/Profile";
import "../src/style/Home.css";
import Home from "./Home/Home";

const App = () => {
  return (
    <>
      <AuthProvider>
        {/* <div className="main-home-page" id="main-home-page"> */}
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/home" element={<Home/>}></Route>
          </Routes>
        {/* </div> */}
      </AuthProvider>
    </>
  );
};

export default App;
