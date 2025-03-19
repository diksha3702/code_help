import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { ErrorContext } from "../context/ErrorContext";
import checkLogin from "./checkLogin";
import Error from "../Modals/Error";
import { useLocation, useNavigate } from "react-router-dom";
const AuthProvider = ({ children }) => 
{
  const location = useLocation();
    const navigate = useNavigate();
      const [errorMsg , setErrormsg] = useState("");
    
  const [userDetails, setuserDetails] = useState({
    email: "",
    username: "",
    userId:"",
  });

  useEffect(async ()=>
  {

    const data = await checkLogin(setErrormsg , location.pathname);
    
    if(data){
        setuserDetails(data);
    }
    else {
        // navigate the use to login page;
        navigate("/");
    }
    
  },[]);

  const login = async (email, password) => {
    console.log(" in another", email, password);

    const config = {
      headers: { 
        "Content-Type": "application/json",
      },
      withCredentials: true, 
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        config
      );

      // storing the token in local storage for headers method
      localStorage.setItem("authToken", res.data.token);

      setuserDetails({
        email: res.data.userData.email,
        username: res.data.userData.username,
        userId: res.data.userData.userId,
      });
    } catch (error) {
      console.log(error);
      setErrormsg(error.response?.data?.error || "Something went wrong");
    }
};


  const register = async (email,username, password) => {
    const config = {
        headers: { 
          "Content-Type": "application/json",
        },
        withCredentials: true, // ✅ Ensuring cookies are included in requests
      };

    try {
      const res = await axios.post(
        "http://localhost:5000/signup",
        { username, email, password },
        config
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrormsg(error.response.data.error);
    }
  };
  return (
    <AuthContext.Provider
      value={{login, register, userDetails}}>
      
      <ErrorContext.Provider value = {{setErrormsg}}>
      <Error error={errorMsg} />
      {children}
      </ErrorContext.Provider>
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;
