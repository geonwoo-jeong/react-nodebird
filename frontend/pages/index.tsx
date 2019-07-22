import { Avatar, Button, Card, Form, Icon, Input } from "antd";
import Link from "next/link";

const Home = () => {
  const dummy = {
    imagePaths: [],
    isLoggedIn: true,
    mainPosts: [
      {
        User: {
          id: 1,
          nickName: "someone"
        },
        content: "FIrst Twit",
        createdAt: new Date(),
        img: ""
      }
    ]
  };

  return (
    <>
      {dummy.isLoggedIn && (
        <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
          <Input.TextArea maxLength={140} placeholder="What's new?" />
          <div>
            <input type="file" multiple={true} hidden={true} />
            <Button>이미지 업로드</Button>
            <Button type="primary" style={{ float: "right" }} htmlType="submit">
              짹짹
            </Button>
          </div>
          <div>
            {dummy.imagePaths.map((value, index) => {
              return (
                <div key={value} style={{ display: "inline-block" }}>
                  <img
                    src={"http://localhost:3065/" + value}
                    style={{ width: "200px" }}
                    alt={value}
                  />
                  <div>
                    <Button>제거</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Form>
      )}
      {dummy.mainPosts.map(post => {
        return (
          <Card
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
              title={post.User.nickName}
              description={post.content}
            />
          </Card>
        );
      })}
    </>
  );
};

export default Home;
