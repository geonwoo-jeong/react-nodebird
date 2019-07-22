import { Col, Input, Menu, Row } from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const AppLayout = ({ children }) => {
  const dummy = {
    Followers: [],
    Followings: [],
    Post: [],
    isLoggedIn: false,
    nickName: "Geonwoo"
  };

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
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://www.gwjeong.com">
            <a target="_blank">Made by Geonwoo Jeong</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
