import { Avatar, Card } from "antd";

const dummy = {
  Followers: [],
  Followings: [],
  Post: [],
  isLoggedIn: false,
  nickname: "Geonwoo"
};

const UserProfile = () => {
  return (
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
          Follower
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
  );
};

export default UserProfile;
