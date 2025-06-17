import { User } from "../Models/User.model.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { ApiError } from "../Utils/ApiError.js";
import { AsyncHandler } from "../Utils/AsyncHandler.js";
import jwt from "jsonwebtoken";

const generateAccessRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      error,
      "Something went wrong while generating Access and Refresh Token"
    );
  }
};

const registerUser = AsyncHandler(async (req, res) => {
  const { email, UserName, Password } = req.body || {};

  if (!email || !UserName || !Password || !req.body) {
    throw new ApiError(417, "All fields are required");
  }

  const userExist = await User.findOne({
    $or: [{ email }, { UserName }],
  });

  if (userExist) {
    throw new ApiError(404, "User Already Exists");
  }
  try {
    const user = await User.create({
      email: email,
      Password: Password,
      UserName: UserName,
    });
    await user.save();
    return res
      .status(200)
      .json(new ApiResponse(200, user, "User created Successfully"));
  } catch (error) {
    throw new ApiError(500, error, "User creation failed");
  }
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, Password } = req.body || {};

  if (!email || !Password) {
    throw new ApiError(417, "Email and Password is required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(Password);
  if (!isPasswordValid) {
    throw new ApiError(400, "Email or Password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );

  try {
    const loggedInUser = await User.findById(user._id).select("-Password");
    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: parseInt(process.env.ACCESS_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000,
      })
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge:
          parseInt(process.env.REFRESH_TOKEN_EXPIRY) * 24 * 60 * 60 * 1000,
      })
      .json(new ApiResponse(200, loggedInUser, "User Logged in Successfully"));
  } catch (error) {
    throw new ApiError(500, "Something went wrong while logging In user");
  }
});

const newAccessToken = AsyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    throw new ApiError(401, "No refresh Token");
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const user = await User.findOne({ _id: decoded._id, refreshToken });
    if (!user) {
      throw new ApiError(403, "Refresh Token not valid or revoked");
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    return res
      .status(200)
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: parseInt(process.env.ACCESS_TOKEN_EXPIRY) * 15 * 60 * 1000,
      })
      .json(new ApiResponse(200, "", "Access Token refreshed Successfully"));
  } catch (error) {
    throw new ApiError(403, "Invalid or expired RefreshToken");
  }
});

const logOutUser = AsyncHandler(async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(200)
        .json(
          new ApiResponse(200, "", "Logged Out Successfully (No token found)")
        );
    }
    const user = await User.findOne({ refreshToken });

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res
      .status(200)
      .json(new ApiResponse(200, "", "Logged Out Successfully"));
  } catch (error) {
    throw new ApiError(500, error, "Logout failed");
  }
});

export { registerUser, loginUser, newAccessToken, logOutUser };
