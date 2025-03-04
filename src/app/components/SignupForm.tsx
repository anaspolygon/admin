"use client";
import React, { useState, useEffect } from "react";
import { Input, Button, Typography, Card, notification } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const SignupForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Notification state
  const [api, contextHolder] = notification.useNotification();
  const [success, setSuccess] = useState(false); // Track signup success

  useEffect(() => {
    if (success) {
      api.success({
        message: "Registration Successful",
        description: "Your account has been created successfully!",
      });
    }
  }, [success]); // ✅ Only runs when `success` state changes

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };
  
  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleSignUp = async () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character"
      );
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else if (!validateConfirmPassword(password, confirmPassword)) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true); // ✅ Trigger notification after successful signup
        setTimeout(() => router.push("/login"), 2000); // Redirect after success
      } else {
        console.log(data);
        
        api.error({
          message: "Registration Failed",
          description: data?.error || "Something went wrong",
        });
      }
    } catch (error) {
      api.error({
        message: "Network Error",
        description: "Unable to connect to the server. Please try again.",
      });
    }
  };

  return (
    <div className="w-[500px]">
      {contextHolder} {/* Required for Ant Design notifications */}
      <Card className="shadow-lg">
        <Title level={2}>Create an account</Title>
        <Input value={name} onChange={(e) => setName(e.target.value)} size="large" placeholder="Name" />
        {nameError && <p className="text-red-500 mt-2">{nameError}</p>}

        <Input value={email} onChange={(e) => setEmail(e.target.value)} size="large" placeholder="Email" style={{ marginTop: 16, marginBottom: 16 }} />
        {emailError && <p className="text-red-500 mb-2">{emailError}</p>}

        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4" size="large" placeholder="Password" />
        {passwordError && <p className="text-red-500 mb-2">{passwordError}</p>}

        <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mb-2" size="large" placeholder="Confirm password" />
        {confirmPasswordError && <p className="text-red-500 mb-2">{confirmPasswordError}</p>}

        <Button onClick={handleSignUp} type="primary" size="large" className="w-full mt-2">
          Sign Up
        </Button>

        <div className="flex justify-between mt-4">
          <Link href="/login">Already a member? Login</Link>
          <Link href="/forgot-password" className="text-black">Forgot your password?</Link>
        </div>
      </Card>
    </div>
  );
};

export default SignupForm;
