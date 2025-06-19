import React from "react";
import RegisterForm from "../components/Forms/RegisterForm.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
          <h2 class="text-[#0d141c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Create your account
          </h2>
          <RegisterForm />
          <p className="text-[#49739c] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
