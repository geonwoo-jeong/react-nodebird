import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const { me } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          Twit
          <br />
          {me.Post.length}
        </div>,
        <div key="following">
          Following
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          Follower
          <br />
          {me.Followers.length}
        </div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickName[0]}</Avatar>}
        title={me.nickName}
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
