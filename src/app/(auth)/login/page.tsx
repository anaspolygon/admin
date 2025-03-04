import React from "react";
import LoginForm from "@/app/components/LoginForm";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
