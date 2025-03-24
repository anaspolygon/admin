"use client";
import React, { useState } from "react";
import { Button, Card, Input, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Text } = Typography;

const FogotPassword = () => {
   const [email, setEmail] = useState("");
   const [emailError,setEmailError] = useState("");
   const [message, setMessage] = useState("");

   const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const router = useRouter();

   const handleResetPassword = async() => {
    router.push("/reset-password");
    return;
    if (!email) {
      setEmailError("Email is required");
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    }
    if (email) {
      const res = await fetch("/api/auth/request-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      console.log("hello");
      
  
      const data = await res.json();
      setMessage(data.message);
    }
  };



  return (
    <div className="w-[550px]">
        <h2 className="font-lexend-deca text-[36px] leading-[54px] font-bold mb-10">Having trouble to sign in?<br/>
        Reset your password.</h2>
        <Input
          style={{
            marginBottom: 16,
            height:48
          }}
          size="large"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }
        }
        />
         {emailError && (
          <p className="text-red-500 mb-2">{emailError}</p>
        )}
        <Button  style={{
            backgroundColor:"#111111",
            fontWeight:600,
            height:48
          }} onClick={() => handleResetPassword()} type="primary" size="large" className="w-full">
          Reset Password
        </Button>
        <div className="flex justify-between mt-4">
          <p>
            <span className="text-[#484848] text-base font-inter">Don't have an account?</span>
          <Link className="font-inter text-base font-semibold text-[#333]" href="/login"> Log in</Link>
          </p>
        </div>
    </div>
  );
};

export default FogotPassword;
