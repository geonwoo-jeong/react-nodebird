import { Input, Menu } from "antd";
import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">NodeBird</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton={true}
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

export default AppLayout;
