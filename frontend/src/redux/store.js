import { configureStore } from "@reduxjs/toolkit";
import registerSliceReducer from "./slices/authSlice.js";

const store = configureStore({
  reducer: {
    register: registerSliceReducer,
  },
});

export default store;
