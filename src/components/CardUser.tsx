import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import styles from "../../styles/UsersCard.module.css";
import Link from "next/link";

export default function ActionAreaCard({ user: { name, email, id } }) {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea>
        <div className={styles.img}>
          <Avatar
            alt="random img"
            src={`https://i.pravatar.cc?img=${id}`}
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {email}
          </Typography>
        </CardContent>
        <CardActions>
          Learn more about
          <Link href={`/user/${id}`}>
          <strong> &nbsp; &nbsp; 👉 {name} 👈</strong>
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
