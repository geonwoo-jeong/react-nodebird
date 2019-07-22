import { Avatar, Button, Card, Icon } from "antd";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
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
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickName[0]}</Avatar>}
        title={post.User.nickName}
        description={post.content}
      />
    </Card>
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
