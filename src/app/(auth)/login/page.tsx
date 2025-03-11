import React from "react";
import LoginForm from "@/app/components/LoginForm";
import Image from "next/image";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div>
        <h2 className="font-lexend-deca text-[36px] leading-[54px] font-bold">
          Welcome back! Please <br /> Sign in to continue.
        </h2>
        <p className="font-inter text-sm leading-7 text-[#333] mt-7">
          By signing up, you will gain access to exclusive content, special
          offers,
          <br /> and be the first to hear about exciting news and updates.
        </p>
        <LoginForm />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
