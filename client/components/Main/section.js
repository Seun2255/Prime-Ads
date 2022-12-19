import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Main/section.module.css";
import images from "../../assets/images/images";
import icons from "../../assets/icons/icons";
import { useState } from "react";
import Link from "next/link";
import Dropzone from "react-dropzone";

export default function Section() {
  const [modal, setModal] = useState(false);
  const [options, setOptions] = useState([false, false, false, false]);
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);

  const handleCheckBoxClick = (index) => {
    var temp = [...options];
    temp[index] = !temp[index];
    setOptions(temp);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.how} id="work">
        How does
        <span className={styles.how_1}>
          {"  "}Prime Ads{"  "}{" "}
        </span>
        work?
      </h2>
      <span>
        <p className={styles.steps}>
          Generate passive income from your Dapps <br />
          in 3 EASY STEPS
        </p>
      </span>
      <div className={styles.frame}>
        <Image alt="frames" src={images.how_it_works} layout="fill" />
      </div>

      <div className={styles.everyone__convinced}>
        <div className={styles.people}>
          {/* <Image src={images.followers} /> */}
        </div>

        <h3 className={styles.convinced}>
          Everyone <span style={{ color: "#161616" }}>else is convinced</span>
        </h3>

        <div className={styles.reviews} id="compare">
          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "Prime Ads is a great way to earn passsive income on your site
                  or to get more traffic for your site."
                </strong>
              </p>
              <div className={styles.reviewer}>
                {/* <Image alt="person" src={images.michael} /> */}
                <span className={styles.reviewer_name}>
                  <strong>David</strong>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "Prime Ads is a great way to earn passsive income on your site
                  or to get more traffic for your site."
                </strong>
              </p>
              <div className={styles.reviewer}>
                {/* <Image alt="person" src={images.atinuke} /> */}
                <span className={styles.reviewer_name}>
                  <strong>Tolulope</strong>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.review__box}>
              <p>
                <strong>
                  "Prime Ads is a great way to earn passsive income on your site
                  or to get more traffic for your site."
                </strong>
              </p>
              <div className={styles.reviewer}>
                {/* <Image alt="person" src={images.damilare} /> */}
                <span className={styles.reviewer_name}>
                  <strong>Samuel</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.FAQ}>
        <h4 className={styles.FAQ__header}>
          Frequently Asked <span style={{ color: "#00286e" }}>Questions.</span>
        </h4>
        <div className={styles.questions}>
          <div
            className={styles.question}
            onClick={() => setAnswer1(!answer1)}
            style={{ marginBottom: answer1 ? "40px" : "100px" }}
          >
            <div className={styles.question__inner}>
              <span>Is Prime Ads Free?</span>
              <div className={styles.arrow__down}>
                <Image alt="frames" src={icons.arrow} layout="fill" />
              </div>
            </div>
            {answer1 && (
              <div className={styles.question__answer}>
                Yes, it's free to use. Payements are only required if you wish
                to promote your site.
              </div>
            )}
          </div>

          <div className={styles.question} onClick={() => setAnswer2(!answer2)}>
            <div className={styles.question__inner}>
              <span>What it does?</span>
              <div className={styles.arrow__down}>
                <Image alt="frames" src={icons.arrow} layout="fill" />
              </div>
            </div>
            {answer2 && (
              <div className={styles.question__answer}>
                As an individual/ company who wants to earn from hosting ads you
                can access the site and look through the available ad requests
                going on. You select one and then use the API endpoint generated
                to make a link o your own Dapp that users should click to count
                as a referral. Each referral earns you some amount of our custom
                Prime token which you can then withdraw any time you want.
                <br />
                <br />
                For those looking to advertise their Dapp/business this is a an
                easy way to post an ad, the only cost you pay is the amount for
                the ads(which determines how much traffic you'll gain from the
                ad). You can also choose specific people or companies to
                advertise for you if you feel their site matches with the
                customer base you want.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
