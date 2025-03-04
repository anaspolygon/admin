import React from "react";
import SignupForm from "@/app/components/SignupForm";
import AuthLayout from "../components/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
