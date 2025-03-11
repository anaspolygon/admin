"use client"
import { useState } from "react";
import RoleCard from "./components/RoleCard";
import { Modal } from "antd";
import RoleModal from "./components/RoleModal";

const Page = () => {
  const roles = [
    { id: 1, name: "Administrator" },
    { id: 2, name: "Manager" },
    { id: 3, name: "Sales" },
  ];
  const [modal1Open, setModal1Open] = useState(true);
  return (
    <div>
      <h1 className="font-lexend-deca text-2xl font-bold">
        Roles & Permissions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {roles.map((role) => (
          <RoleCard key={role.id} setModal1Open={setModal1Open}/>
        ))}
      </div>
      <Modal
        title="Edit Role"
        style={{ top: 20 }}
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <RoleModal/>
      </Modal>
    </div>
  );
};
export default Page;
