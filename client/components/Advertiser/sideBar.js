import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/sidebar.module.css";
import icons from "../../assets/icons/icons";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function SideBar(props) {
  const { view, setView, switchAccount } = props;

  const buttons = useSpring({
    config: { duration: 300 },
  });

  const options = [
    { icon: icons.library, text: "Dashboard" },
    { icon: icons.finance, text: "finances" },
    { icon: icons.settings, text: "Settings" },
    { icon: icons.addProject, text: "New project" },
  ];

  return (
    <animated.div className={styles.container}>
      <div className={styles.logo__box}>
        {/* <div className={styles.logo}>
          <Image alt="logo" src={icons.logo} layout="fill" />
        </div> */}
        <animated.span className={styles.logo__name}>Prime adds</animated.span>
      </div>
      <animated.div className={styles.nav__buttons} style={buttons}>
        <div className={styles.nav__title}>MENU</div>
        {options.map((option, index) => {
          return (
            <div
              className={styles.nav__button__item}
              key={index}
              style={{
                backgroundColor:
                  view === option.text.toLowerCase()
                    ? "rgb(231, 239, 244)"
                    : "transparent",
                borderLeft:
                  view === option.text.toLowerCase()
                    ? "3px solid #004bcc"
                    : "none",
              }}
              onClick={() => setView(option.text.toLowerCase())}
            >
              <div className={styles.icon__box}>
                <Image alt="icon" layout="fill" src={option.icon} />
              </div>
              <div className={styles.nav__text}>{option.text}</div>
            </div>
          );
        })}
      </animated.div>
      <button className={styles.switch__mode} onClick={switchAccount}>
        <div className={styles.switch__icon}>
          <Image src={icons.modeSwap} layout="fill" />
        </div>
        switch mode
      </button>
    </animated.div>
  );
}
