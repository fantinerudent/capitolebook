import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/capitolelogo.jpeg" />
        </Head>

        <main className={styles.main}>
          <Typography variant="h1" component="div" gutterBottom>
            Welcome
          </Typography>
        </main>
      </div>
    </>
  );
}
