export default {
  APP_NAME: process.env.REACT_APP_APP_NAME,
  INFURA_API_KEY: process.env.REACT_APP_INFURA_API_KEY,
  INFURA_API_URL: process.env.REACT_APP_INFURA_API_URL,
  SUPPORTED_CHAINS: process.env.REACT_APP_SUPPORTED_CHAINS.split(",").map((v) =>
    Number(v)
  ),
};
