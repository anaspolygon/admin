"use client";
import React, { useState } from "react";
import { Input, Button, Typography, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
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
    router.push("/roles-permissions");
    return;
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
  
  return (
    <div className="w-[550px] mt-7">
        {/* <Title  style={{fontSize:18,marginBottom:20}}>Login</Title> */}
        <Input className="custom-input" style={{height:48}} onChange={(e) => {
          setEmail(e.target.value); 
          setEmailError("")}
        }  size="large" placeholder="Email" />
        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
        <Input.Password style={{height:48}} onChange={(e) => {
          setPassword(e.target.value);
          setPasswordError("")
        }} className="mt-4" size="large" placeholder="Password" />
        {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
        <Link className="my-5 block text-[#0070f3] underline transition-colors hover:text-gray-900 hover:no-underline font-semibold"  href="/forgot-password">
            Forgot Password?
          </Link>
        <Button
          onClick={() => handleLogin()}
          type="primary"
          size="large"
          className="w-full"
          style={{
            backgroundColor:"#111111",
            fontWeight:600,
            height:48
          }}
        >
          Log in <ArrowRightOutlined />
        </Button>
        <div className="flex justify-between">
          {/* <Link href="/signup">Create An Account</Link> */}
        </div>
      
    </div>
  );
};

export default LoginForm;
