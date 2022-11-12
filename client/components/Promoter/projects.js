import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Advertiser/dashboard.module.css";
import icons from "../../assets/icons/icons";
import { useContext, useState } from "react";
import { Context } from "../../context";
import Card from "../projectCard";
import ExpandedCard from "../expandedCard";

export default function Projects(props) {
  const { jobs, type } = props;
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedId, setSelectedId] = useState();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ongoin Ads</h3>
      <div className={styles.card__grid}>
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
      </div>
      {expanded && (
        <ExpandedCard
          id={selectedId}
          details={selected}
          setExpanded={setExpanded}
          type={type}
        />
      )}
    </div>
  );
}
