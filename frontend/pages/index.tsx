import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { isLoggedIn, user } = useSelector((state: any) => state.user);
  const { mainPosts } = useSelector((state: any) => state.post);

  return (
    <div>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
