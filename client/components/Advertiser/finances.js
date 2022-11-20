import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/finances.module.css";
import icons from "../../assets/icons/icons";
import { useState, useContext } from "react";
import BuyTokensModal from "../../modals/buyTokensModal";
import { Context } from "../../context";

export default function Finances(props) {
  const [transactionModal, setTransactionModal] = useState(false);
  const { state, dispatch } = useContext(Context);
  console.log(state);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Finances</div>
      <div className={styles.content}>
        <div className={styles.balance}>
          <span>ETH balance: {state.user.ethBalance} ETH</span>
          <span>Token balance: {state.user.tokenBalance} PRI</span>
          <button onClick={() => setTransactionModal(true)}>Get more +</button>
        </div>
      </div>
      {transactionModal && (
        <BuyTokensModal setTransactionModal={setTransactionModal} />
      )}
    </div>
  );
}
