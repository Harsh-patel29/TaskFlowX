import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm.jsx";

const Login = () => {
  return (
    <>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
          <h2 className="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Welcome back
          </h2>
          <LoginForm />
          <p className="text-[#49739c] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
