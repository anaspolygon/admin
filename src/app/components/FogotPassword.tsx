import React, { useState } from "react";
import { Button, Card, Input, Typography } from "antd";
import Link from "next/link";

const { Text } = Typography;

const FogotPassword = () => {
   const [email, setEmail] = useState("");
   const [emailError,setEmailError] = useState("");

   const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

   const handleResetPassword = () => {
    if (!email) {
      setEmailError("Email is required");
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    }
    if (email) {
      // Call login API
    }
  };
  return (
    <div className="w-[430px]">
      <Card className="shadow-lg">
        <p className="mb-5 text-base">
          Don't worry, we'll send you an email to reset your password.
        </p>
        <Input
          style={{
            marginBottom: 16,
          }}
          size="large"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }
        }
        />
         {emailError && (
          <p className="text-red-500 mb-2">{emailError}</p>
        )}
        <Button onClick={() => handleResetPassword()} type="primary" size="large" className="w-full">
          Reset Password
        </Button>
        <div className="flex justify-between mt-4">
          <Text>
            Don't have an account?
            <Link href="/login"> Log in</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default FogotPassword;
