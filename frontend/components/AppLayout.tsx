import { Avatar, Button, Card, Col, Form, Input, Menu, Row } from "antd";
import Link from "next/link";
import LoginForm from "./LoginForm";

const AppLayout = ({ children }) => {
  const dummy = {
    Followers: [],
    Followings: [],
    Post: [],
    isLogedIn: false,
    nickname: "Geonwoo"
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
      <Link href="/signup">
        <a>
          <Button>Sign Up</Button>
        </a>
      </Link>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLogedIn ? (
            <Card
              actions={[
                <div key="twit">
                  Twit
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="following">
                  Following
                  <br />
                  {dummy.Followings.length}
                </div>,
                <div key="follower">
                  Follwer
                  <br />
                  {dummy.Followers.length}
                </div>
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
              />
            </Card>
          ) : (
            <LoginForm />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {" "}
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
