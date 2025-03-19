import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/errorResponse.js";

export const protectedRoute = async (req, res, next) => {
  try{
    const token = req.cookies.token;

    if (!token)
      return next(
        new ErrorResponse("User unauthorized no token provided", 401)
      );

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded)
      return next(new ErrorResponse("Unauthorized invalid token", 401));

    const currUser = await User.findById(decoded.id).select("username email _id");
    if (!currUser) return next(new ErrorResponse("User not found", 400));
    req.user = currUser;
    next();
  } catch (error) {
    return next(error);
  }
};

// export const protectedRoute = async (req, res, next) => {
//   let token;

//   // ✅ Extract Token from Headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1]; // Get token after "Bearer "

//       // Verify Token
//       const decoded = jwt.verify(token, process.env.SECRET_KEY);

//       if (!decoded)
//         return next(new ErrorResponse("Unauthorized invalid token", 401));

//       const currUser = await User.findById(decoded.id).select(
//         "username email _id"
//       );
//       if (!currUser) return next(new ErrorResponse("User not found", 400));
//       req.user = currUser;
//       next();
//     } catch (error) {
//       return res.status(401).json({ error: "Not authorized, token failed" });
//     }
//   }

//   if (!token)
//     return next(new ErrorResponse("User unauthorized no token provided", 401));
// };
