import { Avatar, Button, Card, Comment, Form, Icon, Input, List } from "antd";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [commentFormOpened, setCommentFormOpended] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { me } = useSelector((state: any) => state.user);

  const onToggleComment = useCallback(() => {
    setCommentFormOpended(prev => !prev);
  }, []);

  const onSubmitComment = useCallback(event => {
    event.preventDefault();
    if (!me) {
      return alert("You Need Login");
    }
    dispatch({
      type: ADD_COMMENT_REQUEST
    });
  }, []);

  const onChangeCommentText = useCallback(event => {
    const {
      target: { value }
    } = event;
    setCommentText(value);
  }, []);

  return (
    <>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
        extra={<Button>Follow</Button>}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
          title={post.User.nickName}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={commentText}
                onChange={onChangeCommentText}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Twit
            </Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comment.length : 0} comment(s)`}
            itemLayout="horizontal"
            dataSource={post.Comment || []}
            // tslint:disable-next-line: jsx-no-lambda
            renderItem={(item: any) => (
              <li>
                <Comment
                  author={item.User.nickName}
                  avatar={<Avatar>{item.User.nickName[0]}</Avatar>}
                  content={item.content}
                  datetime={item.createdAt}
                />
              </li>
            )}
          />
        </>
      )}
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    img: PropTypes.string
  })
};

export default PostCard;
