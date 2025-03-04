import React, { ReactNode } from "react";
import DashboardLayout from "./components/DashboardLayout";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
