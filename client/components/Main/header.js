import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Main/header.module.css";
// import images from "../../assets/images/images";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import icons from "../../assets/icons/icons";

export default function Header() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <div className={styles.logo__name}>
            <div className={styles.logo__icon}>
              <Image src={icons.logo} layout="fill" />
            </div>
            <h2 className={styles.logo}>Prime Ads</h2>
          </div>
          <ul className={styles.list}>
            <a className={styles.list__item} href="#work">
              How it works?
            </a>

            <a className={styles.list__item} href="#compare">
              Reviews
            </a>
          </ul>
        </div>
        <Link href={"/app"}>
          <button className={styles.app__button}>Go to App</button>
        </Link>
      </nav>

      <div className={styles.main__container}>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.easier}>
              Start Generating income
              <br />
              From Ads Now!
            </h1>
            <p className={styles.save}>
              as long as you have a userbase no matter how small, you can start
              generating some income
              <br />
              from ads now
            </p>
            <span className={styles.use}>
              <Link href={"/app"}>
                <span className={styles.btn_3}>Get Started</span>
              </Link>
            </span>
          </div>
          {/* End of Background */}
          {/* Video */}
          {hydrated && (
            <ReactPlayer
              className={styles.video}
              width="70%"
              height="400px"
              id="view"
              url="https://youtu.be/3y7o2Viy2b8"
              controls
            />
          )}
        </main>
      </div>
    </header>
  );
}
