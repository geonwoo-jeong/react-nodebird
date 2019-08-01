import { Button, Form, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { postAdded, imagePaths, isAddingPost } = useSelector(
    (state: any) => state.post
  );

  useEffect(() => {
    setText("");
  }, [postAdded === true]);

  const onSubmit = useCallback(event => {
    event.preventDefault();
    dispatch({
      data: {
        text
      },
      type: ADD_POST_REQUEST
    });
  }, []);

  const onChangeText = useCallback(event => {
    const {
      target: { value }
    } = event;
    setText(value);
  }, []);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <Input.TextArea
        maxLength={140}
        placeholder="What's New?"
        onChange={onChangeText}
      />
      <div>
        <input type="file" multiple={true} hidden={true} />
        <Button>Image Upload</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          loading={isAddingPost}
        >
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
