import { Button, Form, Input } from "antd";
import { useSelector } from "react-redux";

const PostForm = () => {
  const { imagePaths } = useSelector((state: any) => state.post);
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
        {imagePaths.map((value, index) => {
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
