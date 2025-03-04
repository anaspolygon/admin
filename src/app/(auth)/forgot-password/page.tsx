"use client";
import React from "react";
import AuthLayout from "../components/AuthLayout";
import FogotPassword from "@/app/components/FogotPassword";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <FogotPassword />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
