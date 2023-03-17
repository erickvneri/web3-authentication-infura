import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Provider as Web3AuthenticationProvider } from "./contexts/authentication";

// Feature components
import Welcome from "./components/Welcome";

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <div style={styles}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3AuthenticationProvider>
          <Welcome />
        </Web3AuthenticationProvider>
      </Web3ReactProvider>
    </div>
  );
}

const styles = {
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "#00000099",
};

export default App;
