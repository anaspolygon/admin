import { Input, Modal } from "antd";
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
import { useMemo, useState } from "react";

type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
type Format = GetProp<ColorPickerProps, 'format'>;

interface AddNewUserModalProps {
  modal3Open: boolean;
  setModal3Open: (value: boolean) => void;
}

const AddNewRoleModal = ({
  modal3Open,
  setModal3Open,
}: AddNewUserModalProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [colorHex, setColorHex] = useState<Color>('#1677ff');
  const [formatHex, setFormatHex] = useState<Format | undefined>('hex');

  const hexString = useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex],
  );
  
  return (
    <Modal
      title="Add a new Role"
      style={{ top: 20 }}
      centered
      open={modal3Open}
      onOk={() => setModal3Open(false)}
      onCancel={() => setModal3Open(false)}
    >
      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role Name
        </h2>
        <Input style={{height:40}} size="large" placeholder="Enter role name" />
      </div>

      <div className="mb-6">
        <h2 className="font-inter text-sm text-[#484848] font-semibold mb-1.5">
          Role Color
        </h2>
        <Input value={hexString} style={{height:40}} size="large" placeholder="Enter role name" />
      </div>

      <ColorPicker  format={formatHex} value={colorHex}onChange={setColorHex}
        onFormatChange={setFormatHex} />
   
    </Modal>
  );
};

export default AddNewRoleModal;
