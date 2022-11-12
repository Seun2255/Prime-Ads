import styles from "../styles/projectCard.module.css";
import icons from "../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Card(props) {
  const { details, setExpanded, setSelected, setSelectedId, id } = props;
  var participants = Object.keys(details.participants).length;
  var referallsLeft = details.maxClicks - details.clicks;

  return (
    <animated.div
      className={styles.container}
      onClick={() => {
        setSelected(details);
        setSelectedId(id);
        setExpanded(true);
      }}
    >
      <h4 className={styles.title}>{details.title}</h4>
      <div className={styles.participants}>{participants} participants</div>
      <div className={styles.clicks__left}>{referallsLeft} referals left</div>
    </animated.div>
  );
}
