import LoginForm from "@/app/components/LoginForm";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    // <div className="w-full h-screen flex items-center">
    //   <div className="w-1/2  h-screen flex items-center justify-center">
    //     {children}
    //   </div>
    //   <div className="w-1/2  h-screen bg-[#001529]" />
    // </div>
    <div className="flex items-center  h-screen relative">
      <div className="flex-1 pl-40">
          <h2 className="font-lexend-deca text-[36px] leading-[54px] font-bold">Welcome back! Please <br/> Sign in to continue.</h2>
          <p className="font-inter text-sm leading-7 text-[#333] mt-7">By signing up, you will gain access to exclusive content, special offers,<br/> and be the first to hear about exciting news and updates.</p>
          <LoginForm/>
      </div>
      <div className="flex-1 bg-[#FAFAFA]">
        <h2 className="font-lexend-deca text-[32px] leading-[48px] font-semibold text-center">The simplest way to <br/>manage your workspace.</h2>
          <p className="font-inter text-sm leading-7 text-center mt-5 mb-10 text-[#484848]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis.</p>
        <Image
          alt="left"
          loading="lazy"
          width="818"
          height="690"
          src="/sign-up.webp"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
