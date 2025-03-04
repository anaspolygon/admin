"use client";
import React, { useState } from "react";
import { Button, Input, Modal, Radio } from "antd";
import TableComponent from "../components/TableComponent";
import { CheckboxGroupProps } from "antd/es/checkbox";

const UserPage = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Administrator", value: "administrator" },
    { label: "Reader", value: "reader" },
    { label: "Editor", value: "editor" },
  ];
  return (
    <div>
      <div>
        <Button
          className="mb-4"
          type="primary"
          onClick={() => setModal2Open(true)}
        >
          create a user
        </Button>
      </div>
      <TableComponent />
      <Modal
        title="Create a user"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Input size="large" placeholder="Name" />
        <Input style={{ marginTop: 16 }} size="large" placeholder="Email" />
        <h2 className="my-4 font-bold">Role</h2>

        <Radio.Group block options={options} defaultValue="administrator" />
      </Modal>
    </div>
  );
};

export default UserPage;
