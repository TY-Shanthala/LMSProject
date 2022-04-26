import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import AddUser from "../../assets/add-user .png";
import SidebarComponent from "../organism/SideBar";
import RouterComponent from "../routes/RouterComponent";
import { useLocation } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function LayoutComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const curPath = window.location.pathname;
    setActiveIndex(curPath);
  }, [location]);

  return (
    <Layout className="p-0">
      <Header color="#FFFFFF" className="header">
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]} />
      </Header>
      <Layout className="p-0">
        <Sider width={70} className="site-layout-background">
          <SidebarComponent />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {activeIndex === "/batch" ? (
              <Breadcrumb.Item>Batch</Breadcrumb.Item>
            ) : activeIndex === "/mentor" ? (
              <Breadcrumb.Item>Mentor</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>Request</Breadcrumb.Item>
            )}
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              minHeight: 450,
            }}
          >
            <RouterComponent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default LayoutComponent;
