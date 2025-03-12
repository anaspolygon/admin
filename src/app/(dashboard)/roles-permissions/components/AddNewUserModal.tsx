import { Input, Modal, Select } from "antd";

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
        <Input style={{height:40}} size="large" placeholder="Enter user's Email Address" />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role
        </h2>
        <Select
          defaultValue="Role"
          onChange={handleChange}
          className="w-full"
          style={{height:40}}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div>
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Status
        </h2>
        <Select
          defaultValue="Role"
          onChange={handleChange}
          className="w-full"
          style={{height:40}}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div>
    </Modal>
  );
};

export default AddNewUserModal;
