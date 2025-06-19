import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance.js";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/user/registerUser", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "User registeration failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/user/logoutUser", _, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Logout failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/user/loginUser", data, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Login failed");
    }
  }
);

export const loginDetail = createAsyncThunk(
  "user/logindetail",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/user/logindetail", {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "User detail fetched Successfully"
      );
    }
  }
);
