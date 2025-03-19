import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import notifyRoutes from "./routes/notify.routes.js";
import Notify from "./models/notify.js";

connectDB();
const app = express();
// wrap around the express app instance into the proper http server to handle socket io connections
const server = createServer(app);

app.get("/", (req, res) => {
  res.json("Hey from backend");
});

// create a server to handle io as well as http requests
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let onlineUsers = {};

io.on("connection", (socket) => 
{
  console.log("User connected", socket.id);

  // Storing the socket id for a particular userID;

  socket.on("register", (userId) => {
    onlineUsers[userId] = socket.id;
    console.log(`User ${userId} is online`);
  });


  socket.on("send-notification", async ({message , toUserId}) => 
{
    // app.use("/notify",notifyRoutes);
    const newNotification =await  Notify.create({
        userId : toUserId,
        message
    });
    console.log("Created Notification",newNotification);
    if(onlineUsers[toUserId])
    {
        console.log("if onlien users",onlineUsers[toUserId]);
        io.to(onlineUsers[toUserId]).emit("receive-notification", message);
    }
    
  });

  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

//listening to the http server in the port 3000
server.listen(3000, () => {
  console.log("Server is running on post 3000");
});
