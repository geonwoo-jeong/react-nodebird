import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOG_IN, loginAction } from "../reducers/user";

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
      id: 1,
      img: ""
    }
  ]
};

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state: any) => state.user);
  useEffect(() => {
    dispatch(loginAction);
  }, []);

  return (
    <div>
      {user ? <div>Welcome! {user.nickName} </div> : <div>Bye bye! </div>}
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((post, index) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
