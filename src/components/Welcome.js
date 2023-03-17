import { useState, useEffect } from "react";
import { useProvider as useWeb3Authentication } from "../contexts/authentication";
import metamaskIcon from "../assets/metamask_thumbnail.png";
import coinbaseIcon from "../assets/coinbase_thumbnail.png";

function Welcome() {
  const { address, wallet } = useWeb3Authentication();
  const [logo, setLogo] = useState();

  useEffect(() => {
    if (wallet === "metamask") {
      return setLogo(metamaskIcon);
    }
    return setLogo(coinbaseIcon);
  }, [wallet]);

  const fixedAddress = String.prototype.concat(
    address.slice(0, 5),
    "...",
    address.slice(address.length - 5, address.length)
  );

  return (
    <div style={styles.container}>
      <img style={styles.img} src={logo} alt="walletIcon" />
      <h3 style={styles.text}>Welcome {fixedAddress}</h3>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "80px",
    width: "80px",
  },
  text: {
    color: "#CCC",
  },
};

export default Welcome;
