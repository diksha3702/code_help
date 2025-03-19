import axios from "axios";

const checkLogin = async (setErrormsg, pathname) => {
  // getting hte token from the local storage

  //const token = localStorage.getItem("authToken");

  //if (!token) return false; // If no token, return false

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true, // ✅ Ensuring cookies are included in requests
  };

  //   try {
  //     const res = await axios.get("http://localhost:5000/users/user-details", {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // ✅ Send Token in Headers
  //       },
  //     });

  //     console.log(res.data);
  //     return res.data.userData;

  //   } catch (error) {
  //         setErrormsg(e.response?.data?.error || "Something went wrong");
  //     return false; // Return false if login check fails
  //   }

  if (pathname == "/login") {
    return true;
  }
  try {
    const res = await axios.get(
      "http://localhost:5000/users/user-details",
      config
    );

    return res.data.userData; // Return user details if login is successful
  } catch (e) {
    setErrormsg(e.response?.data?.error || "Something went wrong");
    return false; // Return false if login check fails
  }
};

export default checkLogin;

// import React, { useContext } from "react";
// import { ErrorContext } from "../context/ErrorContext";
// import axios from "axios";
// const checkLogin = () => {
//   const { setErrormsg } = useContext(ErrorContext);
//   return (
//     <>
//       {async () => {
//         const token = localStorage.getItem("authToken");
//         if (token) {
//           const config = {
//             header: {
//               "Content-Type": "application/json",
//               withCredentials: true,
//             },
//           };
//           try {
//             const res = await axios.get(
//                 "http://localhost:5000/users/user-details",
//               config
//             );

//           } catch (e) {
//             setErrormsg(e.response.data.error);
//           }
//         }
//       }}
//     </>
//   );
// };

// export default checkLogin;
