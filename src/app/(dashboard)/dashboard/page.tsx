import React from "react";
import DashboardCard from "./components/DashboardCard";
import { data } from "./data";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {
          data.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
              percentage={item.percentage}/>))
        }
      </div>
    </div>
  );
};

export default DashboardPage;
