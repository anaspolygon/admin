"use client";
import React, { ReactNode, useState } from "react";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  LoginOutlined

} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Avatar } from "antd";
import Link from "next/link";
// import router from "next/navigation";
import { useRouter } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getMenu(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  url: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link href={url}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = [
  //   getItem("Option 1", "1", <PieChartOutlined />),
  //   getItem("Option 2", "2", <DesktopOutlined />),
  getMenu("Users", "sub1", <UserOutlined />, [
    getItem("User", "3", "/user"),
    getItem("Role", "4", "/role"),
    getItem("Alex", "5", "/permission"),
  ]),
  getMenu("Ecommerce", "sub2", <ShoppingOutlined />, [
    getItem("Products", "6", "/products"),
    getItem("Role", "4", "/role"),
    getItem("Alex", "5", "/permission"),
  ]),
];

interface Props {
  children: ReactNode;
}




const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();

  const logOut = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log(data);
        localStorage.removeItem("user");
        router.push("/login");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  const menuItems: MenuProps['items'] = [
    {
      key: '3',
      label: (
        <button onClick={()=> logOut()} className="text-red-500 flex items-center gap-2" type="button">
          <LoginOutlined />
          <span>Log out</span>
        </button>
      ),
    },
  ];

  const user = localStorage?.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={300}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="flex justify-between" style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="pr-10">

            <Dropdown menu={{ items: menuItems }} placement="bottomRight">
              <div className="flex items-center gap-2">
                <Avatar size="large" icon={<UserOutlined />} />
                <p>{user?.name}</p>
              </div>
            </Dropdown>

          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
