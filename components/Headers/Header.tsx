import Head from "next/head";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const HeaderDefault = ({
  title = "HONEYLAND HATCHING MACHINE",
}: {
  title?: string;
}) => {
  return (
    <>
      <Head>
        <title>Honeyland</title>
        <meta name="description" content="Generated by Honeyland" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <div className="v-header">
        <div className="v-header-logo">
          <img src="/honeyland-logo.png" width="100%" />
        </div>
        <div className="v-header-content">
          <div className="v-header-menu">
            <div className="v-header-menu-title">{title}</div>
            <div className="v-header-menu-buttons">
              <WalletMultiButton />
            </div>
          </div>
          <div className="v-header-statistics">
            <div className="v-header-statistics-box">
              <div className="v-header-statistics-box__count">86.21%</div>
              <div className="v-header-statistics-box__title">
                % of Genesis Eggs Hatched
              </div>
            </div>
            <div className="v-header-statistics-box">
              <div className="v-header-statistics-box__count">4763</div>
              <div className="v-header-statistics-box__title">
                Total Genesis Eggs Hatched
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderDefault;