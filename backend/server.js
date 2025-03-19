import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/users.js";
import friendRoutes from "./routes/friends.routes.js";
import roomRoutes from "./routes/room.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import { protectedRoute } from "./middlewares/auth.middlewares.js";
import { Login, Signup } from "./controllers/users/users.js";
import cors from "cors";
config();

//connecting to db
connectDB();

//creating an express app instanse
const app = express();

const PORT = process.env.PORT || 3000;

// parse the json

app.use(cors({
  origin: "http://localhost:5173", // Change this to your frontend URL
  credentials: true, // Allow cookies
}));


app.use(express.json());
app.use(cookieParser());

// define the middleware routes
app.use("/signup", Signup);
app.use("/login", Login);

app.use(protectedRoute);
app.use("/users", userRoutes);
app.use("/friends",friendRoutes);
app.use("/rooms",roomRoutes);
app.get("/", (req, res) => {
  res.send({ message: "Everythingis working fine" });
});
app.use(errorHandler);
//providing the address to the app created
app.listen(PORT, () => {
  console.log(`Server is running on Port:${PORT}`);
});
