import { useState, useEffect } from "react";
import CardUser from "../src/components/CardUser";
import styles from "../styles/UsersCard.module.css";
import { UserInfos } from "../src/models/UserInfosModel";
const axios = require("axios").default;

const Users = () => {
  const [users, setUsers] = useState<UserInfos[] | []>([]);

  useEffect(() => {
    sendGetUsersRequest();
  }, []);

  const sendGetUsersRequest = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        params: {
          _limit: 20,
        },
      })
      .then((result: any) => {
        setUsers(result.data);
      });

  return (
    <div className={styles.main}>
      {users.length > 0 &&
        users.map((user: UserInfos) => <CardUser key={user.id} user={user} />)}
    </div>
  );
};

export default Users;
