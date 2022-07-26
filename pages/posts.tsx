import { useEffect, useState } from "react";
import BasicCard from "../src/components/BasicCard";
import { Post } from "../src/models/posts";
const axios = require("axios").default;

const Posts = () => {
  useEffect(() => {
    sendGetRequest();
  }, []);

  const [posts, setPosts] = useState([]);

  const sendGetRequest = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/posts/?limit=20")
      .then((result: any) => {
        console.log("result =>", result.data);
        setPosts(result.data);
      });

  console.log({ posts });
  return (
    <>
      {posts.length === 0 && <div>No post here</div>}
      {posts.length > 0 &&
        posts.map((post: Post) => {
          <div>
            <BasicCard props={post} />
          </div>;
        })}
    </>
  );
};

export default Posts;
