"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  interface ResetPasswordResponse {
    message: string;
  }

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    const data: ResetPasswordResponse = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="bg-[#FFFFFF] w-full h-screen flex items-center justify-center">
      <div className="w-[500px]">
        <h2 className="font-lexend-deca text-[36px] leading-[54px] font-bold text-center">Reset your password!</h2>
        <Input.Password style={{ height: 48 }} onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError("")
        }} className="mt-4" size="large" placeholder="Enter your password" />
        <Input.Password style={{ height: 48 }} onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError("")
        }} className="mt-4" size="large" placeholder="Enter confirm password" />
        {passwordError && <p className="text-red-500 mt-2">{passwordError} fdsafsadf</p>}
         <Button
          onClick={() => {}}
          type="primary"
          size="large"
          className="w-full mt-4"
          style={{
            backgroundColor:"#111111",
            fontWeight:600,
            height:48
          }}
        >
          Reset Password <ArrowRightOutlined />
        </Button>
        <div className="text-base text-gray-500 font-inter mt-4 flex items-center gap-1">
          <p>Don’t want to reset your password?</p>
          <a  href="/login" className="text-[#0070f3]  transition-colors hover:text-gray-900 hover:no-underline font-semibold"> Log in</a>
        </div>
      </div>
    </div>
  );
}
