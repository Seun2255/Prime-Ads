import Head from "next/head";
import Image from "next/image";
import SideBar from "../../components/Advertiser/sideBar";
import Content from "../../components/Advertiser/content";
import PromoterSideBar from "../../components/Promoter/sideBar";
import PromoterContent from "../../components/Promoter/content";
import { useState } from "react";
import styles from "../../styles/App.module.css";
import ConnectWalletModal from "../../modals/connectWalletModal";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [view, setView] = useState("");
  const [type, setType] = useState("advertiser");

  const handleConnectClick = () => {
    setWalletModal(true);
  };

  return (
    <div className={styles.container}>
      {type === "advertiser" ? (
        <>
          <SideBar
            view={view}
            setView={setView}
            handleConnectClick={handleConnectClick}
            connected={connected}
            switchAccount={() => setType("promoter")}
          />
          <Content
            view={view}
            setView={setView}
            handleConnectClick={handleConnectClick}
            connected={connected}
          />
        </>
      ) : (
        <>
          <PromoterSideBar
            view={view}
            setView={setView}
            handleConnectClick={handleConnectClick}
            connected={connected}
            switchAccount={() => setType("advertiser")}
          />
          <PromoterContent
            view={view}
            setView={setView}
            handleConnectClick={handleConnectClick}
            connected={connected}
          />
        </>
      )}
      {walletModal && (
        <ConnectWalletModal
          setWalletModal={setWalletModal}
          setConnected={setConnected}
        />
      )}
    </div>
  );
}
