import React, { useEffect, useState } from "react";
//import { io } from "socket.io-client";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";
import Login from "../../frontend_new/src/container/login";
const App = () => {
  return (
    <div>
    <Login />
      
    </div>
  )
}

export default App


// Initialize socket connection
// const socket = io("http://localhost:3000");

// const App = () => {
//   const [userId, setUserId] = useState(""); // Current user ID (auto-generated)
//   const [toUserId, setToUserId] = useState(""); // Target user ID (input)
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Generate a random User ID for the logged-in user
//     const generatedUserId = `user_${Math.floor(Math.random() * 10000)}`;
//     setUserId(generatedUserId);

//     socket.on("connect", () => {
//       console.log("Connected", socket.id);

//       // Register the user on the backend
//       socket.emit("register", generatedUserId);
//       console.log(`User registered with ID: ${generatedUserId}`);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   // Function to send notification to a specific user
//   const sendNotification = () => 
//     {
//     if (toUserId.trim() && message.trim()) {
//       socket.emit("send-notification", { message ,toUserId});
//       console.log(
//         `Notification sent from ${userId} to ${toUserId}: ${message}`
//       );
//     }
//   };

//   // Listen for notifications
//   useEffect(() => {
//     socket.on("receive-notification", (data) => {
//       console.log("Received Notification:", data);
//     });

//     return () => {
//       socket.off("receive-notification");
//     };
//   }, []);

//   return (
//     <Container component={Paper} sx={{ p: 3, mt: 5, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>
//         Notification Service
//       </Typography>

//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Your User ID: <strong>{userId}</strong>
//       </Typography>

//       <TextField
//         label="To User ID"
//         variant="outlined"
//         fullWidth
//         value={toUserId}
//         onChange={(e) => setToUserId(e.target.value)}
//         sx={{ mb: 2 }}
//       />

//       <TextField
//         label="Message"
//         variant="outlined"
//         fullWidth
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         sx={{ mb: 2 }}
//       />

//       <Button variant="contained" color="secondary" onClick={sendNotification}>
//         Send Notification
//       </Button>
//     </Container>
//   );
// };

// export default App;

