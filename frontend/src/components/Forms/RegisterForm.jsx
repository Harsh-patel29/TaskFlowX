import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/thunks/userThunk.js";
import { resetRegister } from "../../redux/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  email: z.string().email("Please Enter valid Email"),
  UserName: z.string().min(1, "Please enter Valid Username"),
  Password: z.string().min(6, "Password must be 6 characters Long"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error } = useSelector((state) => state.register);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  React.useEffect(() => {
    if (data?.success) {
      navigate("/login");
      toast.success("Registration successful. Please log in.");
      dispatch(resetRegister());
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetRegister());
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
            placeholder="Enter your email"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </label>
      </div>
      <div class="flex flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">
            Username
          </p>
          <input
            placeholder="Choose a username"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
            {...register("UserName")}
          />
          {errors.UserName && (
            <p className="text-red-500 text-sm">{errors.UserName.message}</p>
          )}
        </label>
      </div>
      <div class="flex  flex-wrap items-end gap-4 px-4 py-3">
        <label class="flex flex-col min-w-40 flex-1">
          <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">
            Password
          </p>
          <input
            placeholder="Create a password"
            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
            {...register("Password")}
          />
          {errors.Password && (
            <p className="text-red-500 text-sm">{errors.Password.message}</p>
          )}
        </label>
      </div>
      <div class="flex px-4 py-3">
        <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#3d98f4] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span class="truncate">Register</span>
        </button>
      </div>
    </form>
  );
}
