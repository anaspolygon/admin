import React, { useState } from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface TableComponentProps<T> {
  columns: TableColumnsType<T>;
  data: T[];
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
}

const TableComponent = <T extends object>({
  columns,
  data,
}: TableComponentProps<T>) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<T> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      rowKey="key"
    />
  );
};

export default TableComponent;
