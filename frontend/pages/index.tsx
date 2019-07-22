import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
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

  return (
    <div>
      {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((post, index) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Home;
