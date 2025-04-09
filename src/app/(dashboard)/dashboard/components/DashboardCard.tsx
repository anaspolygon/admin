import { Progress } from "antd";
const DashboardCard = () => {
  return (
    <div className="p-6 border border-[#e3e3e3] rounded-lg flex items-center justify-between">
      <div>
        <p className="font-inter text-[#666] text-sm mb-1">Total Images</p>
        <h2 className="font-lexend-deca font-semibold text-xl text-[#111]">
          36,476 GB
        </h2>
        <p className="font-inter text-[#666] mt-2">
          <span className="text-green-500 font-medium">+32.40%</span> last month
        </p>
      </div>
      <Progress type="circle" percent={70} size={80}/>
    </div>
  );
};

export default DashboardCard;
