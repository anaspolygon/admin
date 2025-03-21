"use client"
import { useState } from "react";
import RoleCard from "./components/RoleCard";
import { Button, Modal, Select, Input, Space } from "antd";
import RoleModal from "./components/RoleModal";
import {
  PlusOutlined,
  SearchOutlined
} from '@ant-design/icons';
import AddNewUserModal from "./components/AddNewUserModal";
import TableComponent from "../components/TableComponent";
import { roleOptions, roles, statusOptions } from "./data";
import AddButton from "../components/AddButton";
import AddNewRoleModal from "./components/AddNewRoleModal";


const Page = () => {

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const handleAddUserModal = () => {
    setModal2Open(true)
  }

  const handleAddRoleModal = () => {
    setModal3Open(true)
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-lexend-deca text-2xl font-bold">
          Roles & Permissions
        </h1>
        <AddButton name="Add New Role" handleAddButton={handleAddRoleModal} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} setModal1Open={setModal1Open} />
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
        <RoleModal />
      </Modal>
      <div className="my-10 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-lexend-deca text-lg font-semibold mr-4">All Users</h2>
          <Select
            defaultValue="Filter by Status"
            onChange={() => { }}
            className="w-[160px] h-9"
            style={{ height: 40, marginRight: 10 }}
            options={statusOptions}
          />
          <Select
            defaultValue="Filter by Role"
            onChange={() => { }}
            className="w-[160px] h-9"
            style={{ height: 40 }}
            options={roleOptions}
          />
        </div>
        <div className="flex items-center gap-4">
          <Space.Compact size="large">
            <Input size="large" placeholder="Search for users..." prefix={<SearchOutlined />} />
          </Space.Compact>
          <AddButton name="Add New User" handleAddButton={handleAddUserModal} />
        </div>
      </div>
      <TableComponent />
      <AddNewUserModal modal2Open={modal2Open} setModal2Open={setModal2Open} />
      <AddNewRoleModal modal3Open={modal3Open} setModal3Open={setModal3Open} />
    </div>
  );
};
export default Page;
