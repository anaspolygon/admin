import { Input, Modal } from "antd";
import { ColorPicker, Space } from "antd";
import type { ColorPickerProps, GetProp } from "antd";
import { useEffect, useMemo, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";

type Color = Extract<
  GetProp<ColorPickerProps, "value">,
  string | { cleared: any }
>;
type Format = GetProp<ColorPickerProps, "format">;

interface AddNewUserModalProps {
  modal3Open: boolean;
  permissions: any[];
  setModal3Open: (value: boolean) => void;
}

const AddNewRoleModal = ({
  modal3Open,
  permissions,
  setModal3Open,
}: AddNewUserModalProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [colorHex, setColorHex] = useState<Color>("#1677ff");
  const [formatHex, setFormatHex] = useState<Format | undefined>("hex");

  const hexString = useMemo<string>(
    () => (typeof colorHex === "string" ? colorHex : colorHex?.toHexString()),
    [colorHex]
  );

  const [permissionIds, setPermissionIds] = useState<number[]>([]);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const addPermission = (permission: any) => {
    if (permissionIds.includes(permission.id)) {
      setPermissionIds((prev) => prev.filter((id) => id !== permission.id));
    } else {
      setPermissionIds((prev) => [...prev, permission.id]);
    }
  };

  const createRole = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name,permissionIds }),
      });

      const data = await res.json();

      if (res.ok) {
      } else {
        console.log(data);
        setLoading(false);
      }

    } catch (error) {
      setLoading(false);
    }
  };

  console.log(name);

  return (
    <Modal
      title="Add a new Role"
      style={{ top: 20 }}
      centered
      open={modal3Open}
      okText="Create"
      onOk={() => createRole()}
      onCancel={() => setModal3Open(false)}
    >
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role Name
        </h2>
        <Input
          style={{ height: 40 }}
          size="large"
          placeholder="Enter role name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role Color
        </h2>
        <Input
          value={hexString}
          style={{ height: 40 }}
          size="large"
          placeholder="Enter role name"
        />
      </div>

      <ColorPicker
        format={formatHex}
        value={colorHex}
        onChange={setColorHex}
        onFormatChange={setFormatHex}
      />

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {permissions.map((permission, index) => (
          <button
            onClick={() => addPermission(permission)}
            className="py-2 px-3.5 border font-inter font-sm font-medium text-[#484848] rounded-md w-fit-content h-[40px]"
          >
            {permissionIds.includes(permission.id) && <CheckOutlined />}
            <span className="ml-1">{permission.name}</span>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default AddNewRoleModal;
