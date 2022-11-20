import styles from "../../styles/expandedCard.module.css";
import icons from "../../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBackSharp";
import { registerReferal } from "../../pages/api/dappAPI";
import { userRefresh } from "../../pages/api/dappAPI";

export default function AdvertiserStats(props) {
  const { details, id, setStats } = props;
  var participants = Object.keys(details.participants).length;
  var referallsLeft = details.maxClicks - details.clicks;
  const { state, dispatch } = useContext(Context);

  return (
    <div className={styles.container}>
      <animated.div className={styles.content}>
        <Button
          variant="contained"
          style={muiStyles.backButton}
          onClick={() => {
            setStats(false);
          }}
        >
          <ArrowBack />
        </Button>
        <h3 className={styles.title}>Stats</h3>
        <div className={styles.details}>
          <div className={styles.details__item}>
            Total Referalls:{" "}
            {details.participants[state.user.address].referrals}
          </div>
          <div className={styles.details__item}>
            Referalls left: {details.maxClicks - details.clicks}
          </div>
        </div>
        <button
          className={styles.button}
          onClick={() => {
            setStats(false);
          }}
        >
          Back
        </button>
      </animated.div>
    </div>
  );
}

const muiStyles = {
  backButton: {
    backgroundColor: "rgb(17, 4, 90)",
    position: "absolute",
    fontWeight: "500",
    top: "10px",
    left: "10px",
    color: "white",
    padding: "5px",
  },
};
