"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, number, and special character"
    ),
});

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.ok) {
        console.log(session)
        router.replace("/home");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GoogleSignIn = async () => {
    try {
      const res = await signIn("google", { redirect: false });
      if (session.status=="authenticated") {
        
        router.push("/home");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const FacebookSignIn = async () => {
    try {
      const res = await signIn("facebook");
      if (session.status=="authenticated") {
        router.push("/home");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="w-[750px] m-auto my-6 rounded-2xl bg-[#121212]">
      <div className="w-[40%] m-auto flex flex-col justify-center gap-4 py-6">
        <Link href="/" className="flex justify-center">
          <img src="/spotify.svg" alt="Spotify Logo" />
        </Link>

        <div className="text-2xl font-bold text-center">Login to Spotify</div>
        <button
        onClick={FacebookSignIn}
          type="button"
          className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-10 text-sm font-semibold"
        >
          <img src="/facebook.svg" alt="Facebook Icon" />
          Continue with Facebook
        </button>
        <button
          type="button"
          className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-12 text-sm font-semibold"
        >
          <img src="/apple.svg" alt="Apple Icon" />
          Continue with Apple
        </button>
        <button
          onClick={GoogleSignIn}
          type="button"
          className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-10 text-sm font-semibold"
        >
          <img src="/google.svg" width={20} height={20} alt="Google Icon" />
          Continue with Google
        </button>

        <div className="flex justify-between items-center">
          <div className="h-[1px] w-[45%] bg-[#D9DADC]"></div>
          <div className="font-semibold">OR</div>
          <div className="h-[1px] w-[45%] bg-[#D9DADC]"></div>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email Address
          </label>
          <input
            {...register("email")}
            className="border py-2 px-2 rounded border-[#6A6A6A] bg-black"
            placeholder="Email"
            type="text"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}

          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            {...register("password")}
            className="border py-2 px-2 rounded border-[#6A6A6A] bg-black"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className={`w-[30%] justify-center font-semibold text-center text-black ${
              isValid ? "bg-[#1ED760]" : "bg-[#1ed75f86]"
            } rounded px-4 py-2 mt-4`}
          >
            LOG IN
          </button>
        </form>
        {/* Form End */}

        <div className="flex justify-start text-sm underline underline-offset-4 mt-2">
          <Link href="/forgot-password">Forget your password?</Link>
        </div>

        <div className="h-[1px] bg-[#D9DADC] mt-4"></div>

        <div className="text-sm py-2 text-center">
          Don't have an account?
          <Link href="/signup" className="font-semibold underline">
            Sign up for Spotify.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
