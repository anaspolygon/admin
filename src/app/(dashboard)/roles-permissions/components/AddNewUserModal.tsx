import { Input, Modal, Select } from "antd";
import { permissionsOptions, roleOptions, statusOptions } from "../data";

interface AddNewUserModalProps {
  modal2Open: boolean;
  setModal2Open: (value: boolean) => void;
}

const AddNewUserModal = ({
  modal2Open,
  setModal2Open,
}: AddNewUserModalProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Modal
      title="Add a new user"
      style={{ top: 20 }}
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
    >
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Full Name
        </h2>
        <Input style={{height:40}} size="large" placeholder="Enter your name" />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Email
        </h2>
        <Input style={{height:40}} size="large" placeholder="Enter User's Email Address" />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role
        </h2>
        <Select
          defaultValue="Select"
          onChange={handleChange}
          className="w-full"
          style={{height:40}}
          options={ roleOptions}
        />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Status
        </h2>
        <Select
          defaultValue="Select"
          onChange={handleChange}
          className="w-full"
          style={{height:40}}
          options={statusOptions}
        />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Permissions
        </h2>
        <Select
          defaultValue="Select"
          onChange={handleChange}
          className="w-full"
          style={{height:40}}
          options={permissionsOptions}
        />
      </div>
    </Modal>
  );
};

export default AddNewUserModal;
