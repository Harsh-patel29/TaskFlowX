import { User } from "../Models/User.model.js";
import { AsyncHandler } from "../Utils/AsyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import jwt from "jsonwebtoken";

const authenticate = AsyncHandler(async (req, res, next) => {
  const Token = req.cookies.accessToken;
  if (!Token) {
    throw new ApiError(401, "No access Token. Unauthorized");
  }

  jwt.verify(Token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        throw new ApiError(401, "Access Token Expired");
      }
      throw new ApiError(403, "Invalid access Token");
    }
    req.user = decoded;
    next();
  });
});

export { authenticate };
