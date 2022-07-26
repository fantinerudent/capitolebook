import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Post } from "../../src/models/PostModel";
import { UserInfos } from "../../src/models//UserInfosModel";
import CardPost from "../../src/components/CardPost";
import styles from "../../styles/Posts.module.css";
const axios = require("axios").default;

export default function User() {
  const router = useRouter();
  const userId = router.query.userId;

  const [userInfo, setUserInfo] = useState<UserInfos | null>(null);
  [];
  const [lastPosts, setLastPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    sendGetLastPostsRequest();
    sendGetUserInfoRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendGetUserInfoRequest = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((result: any) => {
        setUserInfo(result.data);
      });

  const sendGetLastPostsRequest = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        params: {
          _limit: 5,
        },
      })
      .then((result: any) => {
        setLastPosts(result.data);
      });

  return (
    <div
      style={{
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>User Page</h1>
      <p>
        name : <strong> {userInfo?.name} </strong>
      </p>
      <p>
        username : <strong> {userInfo?.username}</strong>
      </p>
      <p>
        email : <strong> {userInfo?.email}</strong>
      </p>
      <p>
        address :
        <strong>
          {userInfo?.address.street} , {userInfo?.address.city},
          {userInfo?.address.zipcode}
        </strong>
      </p>
      <p>
        phone : <strong>{userInfo?.phone} </strong>
      </p>
      <p>
        website : <strong>{userInfo?.website} </strong>
      </p>
      <p>
        company : <strong>{userInfo?.company.name} </strong>
      </p>

      <h2> Last 5 posts from : {userInfo?.name}</h2>
      {lastPosts &&
        lastPosts.map((post: any) => (
          <div key={post.id} className={styles.card}>
            {<CardPost post={post} />}
          </div>
        ))}
    </div>
  );
}
