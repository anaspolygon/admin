"use client";
import React, { useState } from "react";
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Button, Drawer, DatePicker, Select, Space, Tag } from "antd";
import type { DatePickerProps } from "antd";
import TableComponent from "../components/TableComponent";
import { data, UserData } from "./data";
import AddButton from "../components/AddButton";
import { useRouter } from "next/navigation";

const page = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
            onClick={() => router.push(`/create-product?edit=true`)}
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

  const router = useRouter()

  const handleAddButton = () => {
       router.push("/create-product")
  }

  return (
    <>
      <div className="flex  justify-between mb-8">
        <h2 className="font-lexend-deca text-2xl font-bold">Products Table</h2>
        <AddButton name="Add Product" handleAddButton={handleAddButton} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Input
          size="large"
          style={{ width: 250 }}
          placeholder="Search by product name..."
          prefix={<SearchOutlined />}
        />
        {/* <Button icon={<FilterOutlined />} size="large" onClick={showDrawer}>
          Filters
        </Button> */}
        <Drawer title="Table Filters" onClose={onClose} open={open}>
          <div className="h-full flex flex-col justify-between">
            <div>
              <h2 className="mb-2 font-bold">Amount</h2>
              <Input size="large" placeholder="" />
              <h2 className="my-2 font-bold">Created Date</h2>
              <DatePicker className="w-full" size="large" onChange={onChange} />
              <h2 className="my-2 font-bold">Status</h2>
              <Select
                style={{ width: "100%" }}
                defaultValue="lucy"
                size="large"
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
            <Button size="large" type="primary">
              Show Results
            </Button>
          </div>
        </Drawer>
      </div>
      <TableComponent columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete} />
    </>
  );
};

export default page;
