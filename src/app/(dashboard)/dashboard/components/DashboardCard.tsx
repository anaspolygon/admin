import { Progress } from "antd";

interface DashboardCardProps {
  title: string;
  value: string;
  percentage: string;
}

const DashboardCard = ({ title, value, percentage }: DashboardCardProps) => {
    console.log(Number(percentage.replace(/[^0-9.-]+/g, "")));
    
  return (
    <div className="p-6 border border-[#e3e3e3] rounded-lg flex items-center justify-between">
      <div>
        <p className="font-inter text-[#666] text-sm mb-1">{title}</p>
        <h2 className="font-lexend-deca font-semibold text-xl text-[#111]">
          {value}
        </h2>
        <p className="font-inter text-[#666] mt-2">
          <span className="text-green-500 font-medium">{percentage}</span> last
          month
        </p>
      </div>
      <Progress type="circle" percent={Number(percentage.replace(/[^0-9.-]+/g, ""))} size={80} />
    </div>
  );
};

export default DashboardCard;
