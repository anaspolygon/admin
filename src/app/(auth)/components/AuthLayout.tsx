import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center">
      <div className="w-1/2  h-screen flex items-center justify-center">
        {children}
      </div>
      <div className="w-1/2  h-screen bg-[#001529]" />
    </div>
  );
};

export default AuthLayout;
