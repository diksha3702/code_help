import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../style/Register.css";

// icons
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { BiUser } from "react-icons/bi";



const login = () => {
  
  const {login , register } = useContext(AuthContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // when user registers
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register");
    register(registerEmail, registerUsername , registerPassword);
   
  };
  // when user clicks on login/ submit the form
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login function");
    console.log(loginEmail , loginPassword);
    login(loginEmail , loginPassword);
  };

  return (
    
     <>
      {/* {Load ? <Loading /> : ""} */}
      <div className="form-main">
        <div className="side-box-form form-left">
          <div className="fixed-main"></div>
          {/* <h1>Edicomp</h1> */}
        </div>
        <div className="side-box-form form-right">
          <form
            className="form-box login-form"
            id="login-form"
            onSubmit={handleLogin}
          >
            <h1>Welcome back</h1>
            <p>Create | compile | Collaborate</p>
            <div className="form">
              <div className="input-box">
                <input
                  type="text"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                  class="form-input-text"
                  placeholder="name@gmail.com"
                  required
                />
                <div className="label-input">
                  <AiOutlineMail />
                </div>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                  class="form-input-text"
                  placeholder="min 8 characters"
                  required
                />
                <div className="label-input">
                  <BsKey />
                </div>
              </div>
              <div className="input-box">
                <button>Login</button>
              </div>
            </div>
            <div className="line-box">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <div className="change-box">
              <p>
                Don’t have an account?{" "}
                <span
                  onClick={() => {
                    const ele = document.getElementById("register-form");
                    const ele2 = document.getElementById("login-form");
                    ele2.style.opacity = 0;
                    setTimeout(() => {
                      ele.style.display = "flex";
                      ele.style.opacity = "1";
                      ele2.style.display = "none";
                    }, 500);
                  }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </form>
          <form
            className="form-box register-form"
            id="register-form"
            onSubmit={handleRegister}
          >
            <h1>Hola User!</h1>
            <p>Create | compile | Collaborate</p>
            <div className="form">
              <div className="input-box">
                <input
                  type="text"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  class="form-input-text"
                  required
                  placeholder="hetu1107"
                />
                <div className="label-input">
                  <BiUser />
                </div>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  class="form-input-text"
                  placeholder="name@gmail.com"
                  required
                />
                <div className="label-input">
                  <AiOutlineMail />
                </div>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  class="form-input-text"
                  placeholder="min 8 characters"
                  required
                />
                <div className="label-input">
                  <BsKey />
                </div>
              </div>
              <div className="input-box">
                <button>Register</button>
              </div>
            </div>
            <div className="line-box">
              <div className="line"></div>
              <p>or</p>
              <div className="line"></div>
            </div>
            <div className="change-box">
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    const ele2 = document.getElementById("register-form");
                    const ele = document.getElementById("login-form");
                    ele2.style.opacity = 0;
                    setTimeout(() => {
                      ele.style.display = "flex";
                      ele.style.opacity = "1";
                      ele2.style.display = "none";
                    }, 500);
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
   
  );
};

export default login;
