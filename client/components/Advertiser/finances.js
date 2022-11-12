import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/finances.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import BuyTokensModal from "../../modals/buyTokensModal";

export default function Finances(props) {
  const { user } = props;
  const [transactionModal, setTransactionModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Finances</div>
      <div className={styles.content}>
        <div className={styles.balance}>
          <span>ETH balance: {user.ethBalance} ETH</span>
          <span>Token balance: {user.tokenBalance} PRI</span>
          <button onClick={() => setTransactionModal(true)}>Get more +</button>
        </div>
      </div>
      {transactionModal && (
        <BuyTokensModal setTransactionModal={setTransactionModal} />
      )}
    </div>
  );
}
