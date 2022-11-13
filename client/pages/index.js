import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  router.push("/app/1");

  return <div className={styles.container}></div>;
}
