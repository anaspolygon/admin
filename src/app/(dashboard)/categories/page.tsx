"use client";
import React from "react";
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import type { TableColumnsType } from "antd";
import TableComponent from "../components/TableComponent";
import { Category, data } from "./data";
import AddButton from "../components/AddButton";
const page = () => {

  const columns: TableColumnsType<Category> = [
    { title: "Category Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Slug", dataIndex: "slug", key: "slug" },
    { title: "Products", dataIndex: "products", key: "products" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Category) => (
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

  const handleEdit = (record: Category) => {
    console.log("Edit clicked for", record);
    // Handle the edit logic here
  };

  const handleDelete = (record: Category) => {
    console.log("Delete clicked for", record);
    // Handle the delete logic here
  };

  const handleAddButton = () => {

  }

  return (
    <>
      <div className="flex  justify-between mb-8">
        <h2 className="font-lexend-deca text-2xl font-bold">Categories Table</h2>
        <AddButton name="Add Product" handleAddButton={handleAddButton} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Input
          size="large"
          style={{ width: 250 }}
          placeholder="Search by category name..."
          prefix={<SearchOutlined />}
        />
      </div>
      <TableComponent columns={columns}
        data={data} />

    </>
  );
};

export default page;
