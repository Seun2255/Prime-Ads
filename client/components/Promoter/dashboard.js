import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/dashboard.module.css";
import icons from "../../assets/icons/icons";
import { useContext, useState } from "react";
import { Context } from "../../context";
import Card from "../projectCard";
import ExpandedCard from "../expandedCard";

export default function Dashboard(props) {
  const { jobs, type } = props;
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Jobs</h3>
      <div className={styles.card__grid}>
        {jobs.length > 0 ? (
          <>
            {jobs.map((ad, id) => {
              return (
                <Card
                  key={id}
                  id={id}
                  details={ad}
                  setExpanded={setExpanded}
                  setSelected={setSelected}
                  setSelectedId={setSelectedId}
                />
              );
            })}
          </>
        ) : (
          <div className={styles.empty}>
            Go to Ongoing Ads section and get some
          </div>
        )}
      </div>
      {expanded && (
        <ExpandedCard
          details={selected}
          setExpanded={setExpanded}
          type={type}
          id={selectedId}
        />
      )}
    </div>
  );
}
