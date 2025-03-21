import { Button } from 'antd';
import React from 'react';
import {
  PlusOutlined
} from '@ant-design/icons';

interface AddButtonProps {
  name:string;
  handleAddButton: () => void;
}

const AddButton = ({name,handleAddButton}:AddButtonProps) => {
    return (
        <Button onClick={handleAddButton} style={{ gap: 4, height: 40 }} type="primary"><PlusOutlined /> <span className="font-semibold" >{name}</span></Button>
    );
};

export default AddButton;