import React, { useContext, useEffect } from "react";
import { ErrorContext } from "../context/ErrorContext";
import "../style/Error.css";

const Error = (props) => {
  const {setErrormsg} = useContext(ErrorContext);

  useEffect(() => {
    if (props.error.trim() == "") {
      document.getElementById("error-box").style.top = "-100%";
    } else {
      document.getElementById("error-box").style.top = "70px";

      setTimeout(() => {
        setErrormsg("");
        console.log("Hello");
      }, 5000);
    }
  }, [props.error]);
  return (
    <div className="error-box error" id="error-box">
      <div>
        <h4>{props.error}</h4>
        <i
          class="fas fa-times"
          onClick={() => {
            document.getElementById("error-box").style.top = "-100%";
          }}
        ></i>
      </div>
    </div>
  );
};

export default Error;
