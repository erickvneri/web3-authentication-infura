import { createContext, useContext, useState } from "react";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import config from "../config";
import metamaskIcon from "../assets/metamask_thumbnail.png";
import coinbaseIcon from "../assets/coinbase_thumbnail.png";

// Feature components
import AuthOptions from "../components/AuthOptions";

const connectors = [
  {
    name: "coinbase",
    caption: "Coinbase",
    icon: coinbaseIcon,
    connector: new WalletLinkConnector({
      url: `${config.INFURA_API_URL}/${config.INFURA_API_KEY}`,
      appName: config.APP_NAME,
      supportedChainIds: config.SUPPORTED_CHAINS,
    }),
  },
  {
    name: "metamask",
    caption: "MetaMask",
    icon: metamaskIcon,
    connector: new InjectedConnector({
      supportedChainIds: config.SUPPORTED_CHAINS,
    }),
  },
];

const context = createContext();

function Provider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [address, setAddress] = useState(null);
  const [wallet, setWallet] = useState(null);

  function onAuth(address) {
    setAddress(address);
    setAuthenticated(true);
  }

  return (
    <context.Provider value={{ address, wallet }}>
      {isAuthenticated ? (
        children
      ) : (
        <AuthOptions
          options={connectors}
          onAuth={onAuth}
          setWallet={setWallet}
        />
      )}
    </context.Provider>
  );
}

function useProvider() {
  return useContext(context);
}

export { Provider, useProvider };
