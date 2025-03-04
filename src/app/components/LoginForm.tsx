"use client";
import React, { useState } from "react";
import { Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };
  

  const handleLogin =async () => {
    if (!email) {
      setEmailError("Email is required");
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    if (email && password) {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await res.json();
  
        if (res.ok) {
          console.log(data);
          localStorage.setItem("user",JSON.stringify(data));
          router.push("/dashboard");
        } else {
          console.log(data);
          
          // api.error({
          //   message: "Registration Failed",
          //   description: data?.error || "Something went wrong",
          // });
        }
      } catch (error) {
        // api.error({
        //   message: "Network Error",
        //   description: "Unable to connect to the server. Please try again.",
        // });
      }
    }
  };

  console.log(emailError,passwordError);
  
  return (
    <div className="w-[500px]">
      <Card className="shadow-lg">
        <Title level={2}>Login</Title>
        <Input onChange={(e) => {
          setEmail(e.target.value); 
          setEmailError("")}
        }  size="large" placeholder="Email" />
        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
        <Input.Password onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError("")
        }} className="mt-4" size="large" placeholder="Password" />
        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
        <Button
          onClick={() => handleLogin()}
          type="primary"
          size="large"
          className="w-full mt-4"
        >
          Log in
        </Button>
        <div className="flex justify-between mt-4">
          <Link href="/signup">Create An Account</Link>
          <Link className="text-black" href="/forgot-password">
            Forgot your password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
