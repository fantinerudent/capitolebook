import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserInfos } from "../models/UserInfosModel";
import Link from "next/link";
const axios = require("axios").default;

const CardPost = (post: any) => {
  const [userInfo, setUserInfo] = React.useState<UserInfos | null>(null);

  console.log("post =>", post.post);

  React.useEffect(() => {
    sendGetUserInfoRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendGetUserInfoRequest = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${post.post.userId}`)
      .then((result: any) => {
        setUserInfo(result.data);
      });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link href={`/user/${userInfo?.id}`}>
            <a>{userInfo?.name}</a>
          </Link>
        </Typography>
        <Typography variant="h5" component="div">
          {post.post.title}
        </Typography>
        <Typography variant="body2">{post.post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardPost;
