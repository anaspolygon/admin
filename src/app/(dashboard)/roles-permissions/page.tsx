"use client";
import { useEffect, useState } from "react";
import RoleCard from "./components/RoleCard";
import { Button, Modal, Select, Input, Space, Tag } from "antd";
import RoleModal from "./components/RoleModal";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import AddNewUserModal from "./components/AddNewUserModal";
import TableComponent from "../components/TableComponent";
import { data, roleOptions, roles, statusOptions, UserData } from "./data";
import AddButton from "../components/AddButton";
import AddNewRoleModal from "./components/AddNewRoleModal";

const Page = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const handleAddUserModal = () => {
    setModal2Open(true);
  };

  const handleAddRoleModal = () => {
    setModal3Open(true);
  };

  const columns = [
    { title: "User ID", dataIndex: "userId", key: "userId" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Created", dataIndex: "created", key: "created" },
    { title: "Permissions", dataIndex: "permissions", key: "permissions" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color;
        if (status === "Active") {
          color = "green";
        } else if (status === "Pending") {
          color = "orange";
        } else if (status === "Deactive") {
          color = "volcano";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: UserData) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const handleEdit = (record: UserData) => {
    console.log("Edit clicked for", record);
    // Handle edit logic here
  };

  const handleDelete = (record: UserData) => {
    console.log("Delete clicked for", record);
    // Handle delete logic here
  };

  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await fetch("/api/permission");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPermissions(data);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };

    fetchPermissions();
  }, []);

  console.log("permissions", permissions);

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
          <h2 className="font-lexend-deca text-lg font-semibold mr-4">
            All Users
          </h2>
          <Select
            defaultValue="Filter by Status"
            onChange={() => {}}
            className="w-[160px] h-9"
            style={{ height: 40, marginRight: 10 }}
            options={statusOptions}
          />
          <Select
            defaultValue="Filter by Role"
            onChange={() => {}}
            className="w-[160px] h-9"
            style={{ height: 40 }}
            options={roleOptions}
          />
        </div>
        <div className="flex items-center gap-4">
          <Space.Compact size="large">
            <Input
              size="large"
              placeholder="Search for users..."
              prefix={<SearchOutlined />}
            />
          </Space.Compact>
          <AddButton name="Add New User" handleAddButton={handleAddUserModal} />
        </div>
      </div>
      <TableComponent
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AddNewUserModal modal2Open={modal2Open} setModal2Open={setModal2Open} />
      {permissions && permissions.length > 0 && (
        <AddNewRoleModal
          modal3Open={modal3Open}
          setModal3Open={setModal3Open}
          permissions={permissions}
        />
      )}
    </div>
  );
};
export default Page;
