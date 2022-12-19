import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/finances.module.css";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import BuyTokensModal from "../../modals/buyTokensModal";
import SellTokensModal from "../../modals/sellTokensModal";

export default function Finances(props) {
  const { user } = props;
  const [transactionModal, setTransactionModal] = useState(false);
  const [transactionModal2, setTransactionModal2] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Finances</div>
      <div className={styles.content}>
        <div className={styles.balance}>
          <span>Matic balance: {user.ethBalance} Matic</span>
          <span>Token balance: {user.tokenBalance} PRI</span>
          <button onClick={() => setTransactionModal(true)}>Get more +</button>
        </div>
        <button
          className={styles.withdraw__button}
          onClick={() => setTransactionModal2(true)}
        >
          Withdraw Balance
        </button>
      </div>
      {transactionModal && (
        <BuyTokensModal setTransactionModal={setTransactionModal} />
      )}
      {transactionModal2 && (
        <SellTokensModal setTransactionModal={setTransactionModal2} />
      )}
    </div>
  );
}
