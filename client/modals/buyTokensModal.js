import styles from "../styles/Modals/buyTokensModal.module.css";
import { animated, useSpring } from "react-spring";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import icons from "../assets/icons/icons";
import { buyTokens, updatedBalance } from "../pages/api/dappAPI";
import { Context } from "../context";

export default function BuyTokensModal(props) {
  const { setTransactionModal } = props;
  const [amount, setAmount] = useState();
  const { state, dispatch } = useContext(Context);

  //react-spring effects
  const popUpEffect = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const handleTyping = (value) => {
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleClick = () => {
    buyTokens(amount / 1000).then(async () => {
      const data = await updatedBalance(state.user);
      dispatch({
        type: "LOGGED_IN_USER",
        payload: data,
      });
      setTransactionModal(false);
    });
  };

  return (
    <div className={styles.container}>
      <animated.div className={styles.buy__box} style={popUpEffect}>
        <div
          className={styles.close__icon}
          onClick={() => setTransactionModal(false)}
        >
          <Image src={icons.collapse} layout="fill" />
        </div>
        <h4 className={styles.box__header}>Buy Prime Token</h4>
        <div className={styles.input__box}>
          <h4 className={styles.input__title}>How many Prime?</h4>
          <div className={styles.input__outer}>
            <input
              className={styles.input}
              onChange={(e) => handleTyping(e.target.value)}
              value={amount}
            />
            <div className={styles.token__symbol}>PRI</div>
          </div>
          <p className={styles.equivalence}>~ {amount / 1000} ETH</p>
        </div>
        <button className={styles.button} onClick={handleClick}>
          Buy Tokens
        </button>
      </animated.div>
    </div>
  );
}
