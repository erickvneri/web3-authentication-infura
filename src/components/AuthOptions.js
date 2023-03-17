import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

/*
 * @param { Array[Object] } options
 *
 * example:
 * [
 *   {
 *     name: "coinbase",
 *     caption: "Coinbase",
 *     connector: new WalletLinkConnector({ ... }),
 *   },
 *   {
 *     name: "metamask",
 *     caption: "MetaMask",
 *     connector: new InjectedConnector({ ... }),
 *   },
 *   ...
 *  ]
 *
 * */
function AuthOptions({ options = [], onAuth, setWallet }) {
  const { activate, deactivate, account } = useWeb3React();

  useEffect(() => {
    if (!account) return;
    onAuth(account);
  }, [account]);

  function authorize(wallet, connector) {
    setWallet(wallet);
    activate(connector);
  }

  return (
    <div style={styles.container}>
      {options.map((opt) => (
        <button
          id={opt.name}
          style={styles.button}
          onClick={() => authorize(opt.name, opt.connector)}
        >
          <img src={opt.icon} alt={opt.caption} style={styles.img} />
          Login with {opt.caption}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    height: "60px",
    margin: "10px",
    borderRadius: "50px",
  },
  img: {
    position: "relative",
    right: "10px",
  },
};

export default AuthOptions;
