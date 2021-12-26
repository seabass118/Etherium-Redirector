# etherium-redirector
Automaticallly sends Ethereum to a hardcoded address when sent to the re-direction address.

## How does it work ?
The script uses web3.js. This lets us interact with Etherium wallets on the blockchain. The script checks the balance of the address every second and when the
address value is greater than 0.005 eth it will sign and send a transaction for the total balance (minus 0.004 eth in gas). This transaction will be sent to the provided "toAddress".

## How to use ?
### Warning: Do not run on main-net. This script was made for fun.
Change the url variable to the link/rpc for the etherium testnet (https) or spin up a local node on your machine using a service like moonbase.

Example:
```const url = 'testnet-link'```
```const web3 = new Web3(url);```

