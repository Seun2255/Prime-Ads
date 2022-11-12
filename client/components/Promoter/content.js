import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/content.module.css";
import icons from "../../assets/icons/icons";
import Navbar from "./navbar";
import Finances from "./finances";
import Dashboard from "./dashboard";
import Projects from "./projects";
import { useContext } from "react";
import { Context } from "../../context";

export default function PromoterContent(props) {
  const { view, setView, connected, handleConnectClick } = props;
  const { state, dispatch } = useContext(Context);
  console.log(state);

  return (
    <div className={styles.container}>
      <Navbar connected={connected} handleConnectClick={handleConnectClick} />
      {connected ? (
        <div className={styles.content}>
          {view === "finances" && <Finances user={state.user} />}
          {view === "dashboard" && (
            <Dashboard jobs={state.user.jobs} type={"accepted"} />
          )}
          {view === "ongoing ads" && (
            <Projects jobs={state.jobs} type={"promoter"} />
          )}
        </div>
      ) : (
        <div className={styles.not__connected}>
          <div className={styles.connection__box}>
            <div className={styles.locked__icon}>
              <Image src={icons.locked} layout="fill" />
            </div>
            <button
              className={styles.center__connect__button}
              onClick={handleConnectClick}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <div className={styles.main}>
          {connected ? (
            <div className={styles.content}></div>
          ) : (
            <div className={styles.not__connected}>
              <div className={styles.connection__box}>
                <div className={styles.locked__icon}>
                  <Image src={icons.locked} layout="fill" />
                </div>
                <button
                  className={styles.center__connect__button}
                  onClick={handleConnectClick}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div> */
}
