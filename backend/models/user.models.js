import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    receivedRequests:[],
    sendedRequests:[],
    friends:[],
    notifications:[],
    rooms:[],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.matchPassword = async function (currPassword) {
  return bcrypt.compare(currPassword, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.SECRET_KEY);
  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
