# Web3 Authentications

A **Blockchain Wallet** plays an important role in Web3 since it can be seen as the
_“Web3 Identity Provider”_ and not only anonymously identifies users within the blockchain,
but also allows to authenticate users within external services similarly to [OAuth 2.0](https://oauth.net/2/).

That's the case of this sample where the provided frontend React application
interacts with both MetaMask and Coinbase wallets to provide a user authentication
method for further service implementation.

### Requirements

- [NodeJS](https://nodejs.org/en/download/).
- [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) web wallet extension.
- [Coinbase](https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad) web wallet extension.
- [Infura](https://www.infura.io/) account.

### Set up

> Before proceeding, make sure your wallets have been configured properly.

- Environment:
  - Rename the `.env.example` file to `.env`.
  - Create a project at **Infura**, copy the API key
    and set it to the `REACT_APP_INFURA_API_KEY` variable.
  - From your **Infura** project, copy the RPC API URL and
    set it to the `REACT_APP_INFURA_API_URL` variable _(withouth the api key ref, i.e. `https://infura.api.url/v3`)_.
  - Set any name you want for the `REACT_APP_APP_NAME` variable.
- Install dependencies and run the app:

      npm install
      npm start

At this point, the React app will be deployed automatically in a new browser tab and you'll be able to interact with the login options.