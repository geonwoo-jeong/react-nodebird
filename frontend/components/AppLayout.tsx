import { Avatar, Button, Card, Col, Input, Menu, Row } from "antd";
import Link from "next/link";

const AppLayout = ({ children }) => {
  const dummy = {
    Followers: [],
    Followings: [],
    Post: [],
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
      <Row>
        <Col xs={24} md={6}>
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
        </Col>
        <Col xs={24} md={12} />
        <Col xs={24} md={6} />
      </Row>
      {children}
    </div>
  );
};

export default AppLayout;
