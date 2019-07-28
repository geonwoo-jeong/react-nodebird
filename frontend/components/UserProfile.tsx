import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />
          {user.Post.length}
        </div>,
        <div key="following">
          Following
          <br />
          {user.Followings.length}
        </div>,
        <div key="follower">
          Follower
          <br />
          {user.Followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickName[0]}</Avatar>}
        title={user.nickName}
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
