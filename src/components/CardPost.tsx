import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { UserInfos } from "../models/UserInfosModel";
import Link from "next/link";
const axios = require("axios").default;

export default function CardPost({ post: { title, body, userId } }) {
  const [userInfo, setUserInfo] = React.useState<UserInfos[] | []>([]);

  React.useEffect(() => {
    sendGetUserInfoRequest();
  }, []);

  const sendGetUserInfoRequest = () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((result: any) => {
        setUserInfo(result.data);
      });

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Link href={`/user/${userInfo.id}`}>
            <a>{userInfo.name}</a>
          </Link>
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  );
}
