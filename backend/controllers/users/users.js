import User from "../../models/user.models.js";
import ErrorResponse from "../../utils/errorResponse.js";

export const Signup = async (req, res, next) => {
  try {
    // receiving the details
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return next(new ErrorResponse("All the feilds are required", 400));
    }

    if (password.length < 6) {
      return next(
        new ErrorResponse("Password should be more then 6 characters")
      );
    }

    const user = await User.findOne({ email });
    if (user) {
      return next(new ErrorResponse("User with the email already excists"));
    }

    const newUser = await User.create({
      username,
      email,
      password,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const currUser = await User.findOne({ email });
  
    if (!currUser) {
      return next(new ErrorResponse("Wrong Credentials Try Again", 404));
    }

    const isMatch = await currUser.matchPassword(password);
    if (!isMatch)
      return next(new ErrorResponse("Wrong Credentials Try Again", 404));

    const token = currUser.generateToken();
    res.cookie("token", token, {
      httpOnly: true, // Secure: prevents XSS attacks
      secure: false, // Set `true` in production with HTTPS
      sameSite: "lax", // Controls cross-site behavior
      maxAge: 24 * 60 * 60 * 1000, // 1 Day expiration
    });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    // });
    
    const userData = {
      username : currUser.username , 
      email : currUser.email,
      userId : currUser._id,
    }
    res.status(200).json({ message: "Login Successfull", token, userData });
  } catch (error) {
    return next(error);
  }
};

export const userDetails = async (req, res, next) => {
  try {
    console.log(" the request in the backend", req);
    const user = req.user;
    const userData = {
      username : user.username , 
      email : user.email,
      userId : user._id,
    }
    res.status(200).json({ message: "User Details", userData });
  } catch (error) {
    return next(error);
  }
};


export const updateDetails = async (req , res , next )=>
  {
    try 
    {
      const user = req.user;
      const {username  , email} = req.body;

      await User.findByIdAndUpdate({_id: user._id}, {username:username , email:email},{new:true});
      res.status(200).json({success:true,message:"Userdetails updated successfully"});
      
    } catch (error) {

      return next(error);
      
    }

};
