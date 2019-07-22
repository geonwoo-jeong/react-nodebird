import { Button, Form, Input } from "antd";

const dummy = {
  imagePaths: [],
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "Geonwoo"
      },
      content: "First Twit",
      img:
        "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726"
    }
  ]
};

const PostForm = () => {
  return (
    <Form style={{ margin: "10px 0 20px" }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="What's New?" />
      <div>
        <input type="file" multiple={true} hidden={true} />
        <Button>Image Upload</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          Twit
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
                <Button>Remove</Button>
              </div>
            </div>
          );
        })}
      </div>
    </Form>
  );
};

export default PostForm;
