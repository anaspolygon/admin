"use client";
import React, { ReactNode, useState } from "react";
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  LoginOutlined,
  SettingOutlined, AppstoreAddOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Button,
  Dropdown,
  Avatar,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
  // Users Menu
  getMenu("Users", "sub1", <UserOutlined />, [
    getItem("User", "3", "/user"),
    getItem("Role", "4", "/role"),
  ]),

  // Ecommerce Menu
  getMenu("Ecommerce", "sub2", <ShoppingOutlined />, [
    getItem("Products", "6", "/products"),
    getItem("Add Product", "7", "/create-product"),
  ]),

  // Products Menu
  getMenu("Products", "sub3", <AppstoreAddOutlined />, [
    getItem("Products List", "8", "/products"),
    getItem("Create Product", "9", "/create-product"),
  ]),

  // Categories Menu
  getMenu("Categories", "sub4", <AppstoreAddOutlined />, [
    getItem("Categories List", "10", "/categories"),
    getItem("Create Category", "11", "/create-category"),
  ]),

  // Roles & Permissions Menu
  getMenu("Roles & Permissions", "sub5", <SettingOutlined />, [
    getItem("Roles", "12", "/roles-permissions"),
    getItem("Permissions", "13", "/roles-permissions"),
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
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button className="flex items-center gap-2" type="button">
          <UserOutlined />
          <span>My Profile</span>
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button className="flex items-center gap-2" type="button">
          <SettingOutlined />
          <span>Settings</span>
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button
          onClick={() => logOut()}
          className="text-red-500 flex items-center gap-2"
          type="button"
        >
          <LoginOutlined />
          <span>Log out</span>
        </button>
      ),
    },
  ];

  const user = localStorage?.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;

  // Define Breadcrumb Items as an array of objects
  const breadcrumbItems = [{ title: "User" }, { title: "Bill" }];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Fixed Sidebar */}
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={260}
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <div className="demo-logo-vertical" />
        {collapsed ? (
          <div className="pl-6 mt-2 mb-6">
            <Image src="/admin_logo_1.svg" alt="" width={43} height={28} />
          </div>
        ) : (
          <div className="flex items-center pl-6 gap-2 mt-4 mb-6">
            <Image src="/admin_logo_1.svg" alt="" width={43} height={28} />{" "}
            <Image src="/admin_logo_2.svg" alt="" width={80} height={19} />
          </div>
        )}
        {/* <Image src="/admin_logo_1" alt="" width={43} height={28}/>
        <Image src="/admin_logo_1" alt="" width={80} height={19}/> */}
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      {/* Main Content Layout with Fixed Header */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 260,
          transition: "margin-left 0.2s",
        }}
      >
        {/* Fixed Header */}
        <Header
          className="flex justify-between items-center"
          style={{
            position: "fixed",
            top: 0,
            left: collapsed ? 80 : 260,
            right: 0,
            height: 64,
            // background: colorBgContainer,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            transition: "left 0.2s",
            background: "#2A62FF",
          }}
        >
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined className="text-white" />
              ) : (
                <MenuFoldOutlined className="text-white" />
              )
            }
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
                {/* <Avatar size="large" icon={<UserOutlined />} /> */}
                <button>
                  <Image
                    src="/user.jpg"
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </button>
                <p className="text-white">{user?.name ?? "Mr.Tom"}</p>
              </div>
            </Dropdown>
          </div>
        </Header>

        {/* Scrollable Content (adjusted for fixed header) */}
        <Content
          style={{
            marginTop: 80, // Adjust for fixed header
            marginLeft: 16,
            marginRight: 16,
            padding: 24,
            minHeight: "calc(100vh - 128px)", // Adjust to fit content below header
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          {/* Updated Breadcrumb with `items` prop */}
          {/* <Breadcrumb
            items={breadcrumbItems}
            style={{ marginBottom: "16px" }}
          /> */}

          {children}
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center", transition: "margin-left 0.2s" }}>
          polygontech ©{new Date().getFullYear()} Created by Al Anas
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
