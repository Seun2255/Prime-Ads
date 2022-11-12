import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/navbar.module.css";
import icons from "../../assets/icons/icons";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Context } from "../../context";

export default function Navbar(props) {
  const { handleConnectClick, connected } = props;
  const [name, setName] = useState("");
  const { state } = useContext(Context);
  // console.log(state);

  return (
    <div className={styles.container}>
      <p className={styles.mode}>Promoter</p>
      {connected ? (
        <div className={styles.name__card}>
          <div className={styles.profile__pic}>
            <Image alt="user" layout="fill" src={icons.profile} />
          </div>
          <span className={styles.username}>{name}</span>
        </div>
      ) : (
        <button className={styles.connect__button} onClick={handleConnectClick}>
          Connect
        </button>
      )}
    </div>
  );
}
