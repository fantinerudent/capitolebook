import { useEffect, useState } from "react";
import CardPost from "../src/components/CardPost";
import { Post } from "../src/models/PostModel";
import styles from "../styles/Posts.module.css";
const axios = require("axios").default;

const Posts = () => {
  useEffect(() => {
    sendGetPostsRequest();
  }, []);

  const [posts, setPosts] = useState<null | Post[]>(null);

  const sendGetPostsRequest = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 20,
        },
      })
      .then((result: any) => {
        setPosts(result.data);
      });

  return (
    <div className={styles.main}>
      {!posts && <div>No post here</div>}
      {posts &&
        posts.map((post: any) => (
          <div key={post.id} className={styles.card}>
            {<CardPost post={post} />}
          </div>
        ))}
    </div>
  );
};

export default Posts;
