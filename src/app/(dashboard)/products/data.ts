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


