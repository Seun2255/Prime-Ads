import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/newProject.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import { startNewAd, userRefresh } from "../../pages/api/dappAPI";

export default function NewProject(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [link, setLink] = useState("");

  const handleTyping = (value) => {
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleClickStart = async () => {
    startNewAd(amount, title, link).then(() => {
      userRefresh().then((data) => {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: data.details,
        });

        dispatch({
          type: "GET_DATA",
          payload: data.jobs,
        });
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.project__icon}>
          <Image src={icons.addProject} layout="fill" />
        </div>
        <span>New Project</span>
      </div>
      <div className={styles.project__name}>
        <h5>Project's Name</h5>
        <input
          type="text"
          className={styles.name__input}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.model}>
        <span>Advertisement Type: </span>
        <button
          className={styles.option__button}
          style={{ marginRight: "20px" }}
        >
          Regular
        </button>
        <button className={styles.option__button}>Custom</button>
      </div>
      <div className={styles.details__box}>
        <div className={styles.amount}>
          <span>Amount: </span>
          <input
            className={styles.amount__input}
            onChange={(e) => handleTyping(e.target.value)}
            value={amount}
          />
        </div>
        <div className={styles.amount}>
          <span>Link: </span>
          <input
            className={styles.amount__input}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className={styles.incentive}>
          up to a {amount * 10} poeple will gain awareness of your site!
        </div>
        <button className={styles.start} onClick={handleClickStart}>
          Start
        </button>
      </div>
    </div>
  );
}
