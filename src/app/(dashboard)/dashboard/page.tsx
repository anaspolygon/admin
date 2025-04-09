import React from "react";
import DashboardCard from "./components/DashboardCard";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
};

export default DashboardPage;
