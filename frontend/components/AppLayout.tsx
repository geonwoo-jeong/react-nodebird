import { Button, Input, Menu } from "antd";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>NodeBird</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            enterButton={true}
            style={{ verticalAlign: "middle" }}
          />
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <a>
          <Button>Sign Up</Button>
        </a>
      </Link>
      {children}
    </div>
  );
};

export default AppLayout;
