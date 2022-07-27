import "antd/dist/antd.dark.css";
import "@esotericsoftware/spine-player/dist/spine-player.css";
import "../styles/index.scss";
import Theme from "@/styled-components/Theme";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "swiper/css/bundle";
import "@solana/wallet-adapter-react-ui/styles.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const WalletConnectProvider = dynamic(
    () => import("../context/WalletConnectionProvider"),
    { ssr: false }
  );

  return (
    <Theme>
      <WalletConnectProvider>
        <NextNProgress />
        <Component {...pageProps} />
      </WalletConnectProvider>
    </Theme>
  );
}

export default MyApp;
