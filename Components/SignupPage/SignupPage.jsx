"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be 4 Characters long."),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be include at least one uppercaseletter, one number, and one special character."
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignupPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, email, password } = data;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        const response = await res.json();
        setError(response.message || "Registration failed.");
      }
    } catch (error) {
      setError("Error during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-[750px] m-auto my-6 rounded-2xl  bg-[#121212]">
        <div className="w-[40%] m-auto flex  flex-col justify-center gap-4 py-6">
          <Link href="/" className="flex justify-center">
            <img src="/spotify.svg" alt="Spotify Logo" />
          </Link>

          <div className="text-2xl font-bold text-center ">
            Signup to Spotify
          </div>

          <button
            type="button"
            onClick={() => signIn("facebook")}
            className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-10  text-sm font-semibold"
          >
            <img src="/facebook.svg" alt="Facebook Icon" />
            Continue with Facebook
          </button>

          <button
            type="button"
            className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-12  text-sm font-semibold"
          >
            <img src="/apple.svg" alt="Apple Icon" />
            Continue with Apple
          </button>

          <button
            type="button"
            onClick={() => signIn("google")}
            className="flex items-center text-white border border-[#B3B3B3] rounded-3xl py-2 pl-6 gap-11  text-sm font-semibold"
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              {...register("name")}
              className="border py-2 px-2 rounded border-[#6A6A6A] bg-black"
              placeholder="Name"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}

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

            <label htmlFor="confirmPassword" className="font-semibold">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              className="border py-2 px-2 rounded border-[#6A6A6A] bg-black"
              placeholder="Confirm Password"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}

            <button
              disabled={!isValid}
              type="submit"
              className={`w-[40%] justify-center font-semibold text-center text-black ${
                isValid ? "bg-[#1ED760]" : "bg-[#1ed75f77]"
              }   rounded px-4 py-2 mt-4`}
            >
              Sign Up
            </button>
          </form>
          {/* Form End */}

          <div className="flex justify-start text-sm underline underline-offset-4">
            <Link href="/forgot-password">Forget your password?</Link>
          </div>

          <div className="h-[1px] bg-[#d9dadca4]"></div>

          <div className="text-sm flex py-2 justify-center text-center">
            Already have an account?
            <Link href="/login" className="flex font-semibold underline ml-1">
              Login here
            </Link>
          </div>

          <div className="text-center text-xs w-[80%] m-auto">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
