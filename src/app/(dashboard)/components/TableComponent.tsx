"use client";
import React, { useState } from "react";
import { Button, Table, Space, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"; 
import type { TableColumnsType, TableProps } from "antd";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  userId: string;
  name: string;
  role: string;
  created: string;
  permissions: string;
  status: string;
}

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
    render: (_: any, record: DataType) => (
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

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  userId: `U100${i}`,
  name: `Edward King ${i}`,
  role: `Role ${i}`,
  created: `2021-09-${i + 1}`,
  permissions: `Read, Write, Delete`,
  status:
    i % 3 === 0
      ? "Active"
      : i % 3 === 1
        ? "Pending"
        : "Deactive", 
}));

const TableComponent: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const handleEdit = (record: DataType) => {
    console.log("Edit clicked for", record);
    
  };

  const handleDelete = (record: DataType) => {
    console.log("Delete clicked for", record);
    
  };

  return (
    <Table<DataType>
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
    />

  );
};

export default TableComponent;
