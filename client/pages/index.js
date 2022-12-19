import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Main.module.css";
import Header from "../components/Main/header";
import Footer from "../components/Main/footer";
import Section from "../components/Main/section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Section />
      <Footer />
    </div>
  );
}
