export const roles = [
  { id: 1, name: "Administrator", color: "#2465FF" },
  { id: 2, name: "Manager", color: "#F5A623" },
  { id: 3, name: "Sales", color: "#FF1A1A" },
  { id: 4, name: "Support", color: "#8A63D2" },
  { id: 5, name: "Developer", color: "#FF1A1A" },
  { id: 6, name: "HR Department", color: "#11A849" },
  { id: 7, name: "Restricted User", color: "#4E36F5" },
  { id: 8, name: "Customer", color: "#0070F3" },
];

export const rolesPermissions = [
  { id: 1, name: "Administrator", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 2, name: "Manager", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 3, name: "Sales", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 4, name: "Support", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 5, name: "Developer", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 6, name: "HR Department", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 7, name: "Restricted User", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] },
  { id: 8, name: "Customer", permissions: [{ id: 1, name: "Read" }, { id: 2, name: "Write" }, { id: 3, name: "Delete" }] }
];

export const roleOptions = [
  { "value": "1", "label": "Administrator" },
  { "value": "2", "label": "Manager" },
  { "value": "3", "label": "Sales" },
  { "value": "4", "label": "Support" },
  { "value": "5", "label": "Developer" },
  { "value": "6", "label": "HR Department" },
  { "value": "7", "label": "Restricted User" },
  { "value": "8", "label": "Customer" }
]
export const statusOptions = [{ value: "1", label: "Active" }, { value: "2", label: "Pending" }, { value: "3", label: "Deactivated" }]

export const permissionsOptions = [{ value: "1", label: "Read" }, { value: "2", label: "Write" }, { value: "3", label: "Delete" }]

export interface UserData {
  key: React.Key;
  userId: string;
  name: string;
  role: string;
  created: string;
  permissions: string;
  status: string;
}


export const data: UserData[] = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  userId: `U100${i}`,
  name: `Edward King ${i}`,
  role: `Role ${i}`,
  created: `2021-09-${i + 1}`,
  permissions: `Read, Write, Delete`,
  status: i % 3 === 0 ? "Active" : i % 3 === 1 ? "Pending" : "Deactive",
}));
