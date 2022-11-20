import styles from "../styles/Modals/ConnectWalletModal.module.css";
import { animated, useSpring } from "react-spring";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import icons from "../assets/icons/icons";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { connect } from "../pages/api/dappAPI";
import { Context } from "../context";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import axios from "axios";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../pages/api/database";

export default function ConnectWalletModal(props) {
  const { setWalletModal, setConnected, option } = props;

  //next-auth feature
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const { state, dispatch } = useContext(Context);

  const handleAuth = async (option) => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector:
        option === 1
          ? new MetaMaskConnector()
          : new WalletConnectConnector({
              options: {
                qrcode: true,
              },
            }),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    connect().then((userData) => {
      console.log(userData);
      setWalletModal(false);
      if (userData) {
        dispatch({
          type: "LOGGED_IN_USER",
          payload: userData.details,
        });

        dispatch({
          type: "GET_DATA",
          payload: userData.jobs,
        });

        const unsubUser = onSnapshot(
          doc(db, "users", userData.details.address),
          (doc) => {
            connect().then((userData) => {
              dispatch({
                type: "LOGGED_IN_USER",
                payload: userData.details,
              });

              dispatch({
                type: "GET_DATA",
                payload: userData.jobs,
              });
            });
          }
        );
      } else {
        console.log("Some error occured");
      }
    });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    setConnected(true);
    setWalletModal(false);
  };

  //react-spring effects
  const popUpEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        e.stopPropagation();
        setWalletModal(false);
      }}
    >
      <animated.div
        className={styles.connect__box}
        onClick={(e) => {
          e.stopPropagation();
          setWalletModal(true);
        }}
        style={popUpEffect}
      >
        <h3 className={styles.box__header}>Connect to wallet</h3>
        <div className={styles.wallet__boxes}>
          <div className={styles.wallet__box}>
            <div className={styles.wallet__icon} onClick={() => handleAuth(1)}>
              <div className={styles.metamask__icon}>
                <Image layout="fill" src={icons.metamask} />
              </div>
            </div>
            <span className={styles.wallet__name}>Metamask</span>
          </div>
          <div className={styles.wallet__box}>
            <div className={styles.wallet__icon} onClick={() => handleAuth(2)}>
              <Image layout="fill" src={icons.walletconnect} />
            </div>
            <span className={styles.wallet__name}>Wallet Connect</span>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
