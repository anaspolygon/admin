"use client";
import React, { useState } from "react";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Input, Button, Drawer, DatePicker, Select, Segmented } from "antd";
import type { DatePickerProps } from "antd";

import TableComponent from "../components/TableComponent";

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
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Input
          size="large"
          style={{ width: 250 }}
          placeholder="Search by product name..."
          prefix={<SearchOutlined />}
        />
        <Button icon={<FilterOutlined />} size="large" onClick={showDrawer}>
          Filters
        </Button>
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
      <TableComponent />
    </div>
  );
};

export default page;
