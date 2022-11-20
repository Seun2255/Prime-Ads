import styles from "../styles/expandedCard.module.css";
import icons from "../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context";
import Button from "@mui/material/Button";
import ArrowBack from "@mui/icons-material/ArrowBackSharp";
import { registerReferal } from "../pages/api/dappAPI";
import { userRefresh } from "../pages/api/dappAPI";
import PromoterStats from "./Promoter/promoterStats";
import AdvertiserStats from "./Advertiser/advertiserStats";

export default function ExpandedCard(props) {
  const { details, type, setExpanded, id } = props;
  var participants = Object.keys(details.participants).length;
  var referallsLeft = details.maxClicks - details.clicks;
  const { state, dispatch } = useContext(Context);
  const [promoterStats, setPromoterStats] = useState(false);

  const effect = useSpring({
    width: "80%",
    height: "80%",
    config: { duration: 3000 },
  });

  const copyText = async () => {
    const value = `https://tritek-mail.herokuapp.com/api/refer/${state.user.address}/${id}/{ETH address of the user of your DApp}`;
    navigator.clipboard.writeText(value);
  };

  const handlePromoterClick = async () => {
    await registerReferal(id);
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
    // axios.post("http://127.0.0.1:8000/api/test-firebase");
  };

  return (
    <div className={styles.container}>
      <animated.div className={styles.content} style={effect}>
        <Button
          variant="contained"
          style={muiStyles.backButton}
          onClick={() => {
            setExpanded(false);
          }}
        >
          <ArrowBack />
        </Button>
        <h3 className={styles.title}>{details.title}</h3>
        <div className={styles.details}>
          <div className={styles.details__item}>
            Participants: {participants}
          </div>
          <div className={styles.details__item}>
            Referalls Left: {referallsLeft}
          </div>
          <div className={styles.details__item}>
            API :
            <button onClick={copyText} className={styles.copy__button}>
              copy
            </button>
          </div>
          <div className={styles.details__item}>
            How to use: make an API call from your frontend using the API above,
            pass the address of the current user of your app and the addreess
            you use on this Dapp in the call. e.g using axios,
          </div>
        </div>
        {type === "promoter" && (
          <button className={styles.button} onClick={handlePromoterClick}>
            Join Now
          </button>
        )}
        {type === "advertiser" && (
          <button className={styles.button}>View Stats</button>
        )}
        {type === "accepted" && (
          <button
            className={styles.button}
            onClick={() => setPromoterStats(true)}
          >
            View Stats
          </button>
        )}
      </animated.div>
      {promoterStats && (
        <PromoterStats setStats={setPromoterStats} details={details} id={id} />
      )}
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
