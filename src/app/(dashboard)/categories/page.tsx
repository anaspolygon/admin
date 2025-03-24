"use client";
import React from "react";
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Tag } from "antd";
import type { TableColumnsType, TableProps } from "antd";

import TableComponent from "../components/TableComponent";


interface DataType {
  key: React.Key;
  userId: string;
  name: string;
  role: string;
  created: string;
  permissions: string;
  status: string;
}



const page = () => {

    const columns: TableColumnsType<DataType> = [
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
        render: (_: any) => (
          <Space size="middle">
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() =>{}} 
            />
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => {}} 
            />
          </Space>
        ),
      },
    ];

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <Input
                    size="large"
                    style={{ width: 250 }}
                    placeholder="Search by category name..."
                    prefix={<SearchOutlined />}
                />
            </div>
            <TableComponent columns={columns}/>
        </>
    );
};

export default page;
