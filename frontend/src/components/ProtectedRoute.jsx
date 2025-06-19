import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loginDetail } from "../redux/thunks/userThunk.js";
const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const [initialLoading, setInitialLoading] = useState(true);
  const { user, loading } = useSelector((state) => state.register);
  useEffect(() => {
    if (!user) {
      dispatch(loginDetail()).finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, [dispatch, user]);

  if (initialLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f4f4]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
