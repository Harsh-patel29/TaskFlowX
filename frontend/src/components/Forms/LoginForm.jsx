import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/thunks/userThunk.js";
import { resetLogin } from "../../redux/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginSchema = z.object({
  email: z.string().email("Please enter valid Email"),
  Password: z.string().min(6, "Password must be 6 characters long"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginuser, error } = useSelector((state) => state.register);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  React.useEffect(() => {
    if (loginuser?.success) {
      navigate("/");
      toast.success("Login Successful!");
      dispatch(resetLogin());
    }
  }, [loginuser]);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetLogin());
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="flex flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">
            Email
          </p>
          <input
            placeholder="Email"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>
      </div>
      <div class="flex  flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">
            Password
          </p>
          <input
            placeholder="Password"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
            {...register("Password")}
          />
          {errors.Password && (
            <p className="text-red-500 text-sm">{errors.Password.message}</p>
          )}
        </label>
      </div>
      <div className="flex px-4 py-3">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#3d98f4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Login</span>
        </button>
      </div>
    </form>
  );
}
