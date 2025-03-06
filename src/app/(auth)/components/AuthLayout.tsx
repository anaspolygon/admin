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
    <div className="flex items-center justify-center h-screen relative bg-[#EEF5F9]">
      <div>
        <div className="flex justify-center mb-2">
          <Image
            alt="left"
            loading="lazy"
            width="140"
            height="19"
            src="/admin_logo.png"
          />
        </div>
        {children}
        <div className="absolute bottom-0 left-0">
          <Image
            alt="left"
            loading="lazy"
            width="376"
            height="317"
            src="/login-bgleftbottom.svg"
          />
        </div>
        <div className="absolute  top-0 right-0">
          <Image
            alt="left"
            loading="lazy"
            width="376"
            height="317"
            src="/login-bgtopright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
