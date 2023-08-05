# Ethereum-Redirector
Automaticallly sends Ethereum to a hardcoded address when sent to the re-direction address.

## How does it work ?
 The script checks the balance of the address every second and when the
address value is greater than 0.005 eth it will sign and send a transaction for the total balance (minus 0.004 eth in gas). This transaction will be sent to the provided "toAddress".

Example:
```const url = 'testnet-link'```
```const web3 = new Web3(url);```

