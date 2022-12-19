import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/newProject.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import { startNewAd, userRefresh } from "../../pages/api/dappAPI";
import SuccesModal from "../../modals/succesModal";

export default function NewProject(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleTyping = (value) => {
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleClickStart = async () => {
    startNewAd(amount, title, link).then(() => {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
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
      {/* <div className={styles.model}>
        <span>Advertisement Type: </span>
        <button
          className={styles.option__button}
          style={{ marginRight: "20px" }}
        >
          Regular
        </button>
        <button className={styles.option__button}>Custom</button>
      </div> */}
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
          <span>Site Link: </span>
          <input
            className={styles.amount__input}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className={styles.incentive}>
          up to {amount * 10} new poeple will visit your site!
        </div>
        <button className={styles.start} onClick={handleClickStart}>
          Start
        </button>
      </div>
      {showModal && <SuccesModal text={"campaign started!"} />}
    </div>
  );
}
