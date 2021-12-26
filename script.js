const Web3 = require('web3');
const url = 'Network Link (Alchemy is a good service to use)';

const web3 = new Web3(url); 

const addressFrom = {privateKey: 'PRIVATE KEY', address: '0x... ADDRESS',};
const addressTo = '0x... ADDRESS';

const balances = async () => {

   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom.address),
      'ether'
   );

   const balance_eth_number = parseFloat(balanceFrom);
   const balance_wei_string = web3.utils.toWei(balanceFrom);
   const balance_wei_number = parseInt(balance_wei_string);
   const withdraw_ammount = Math.round(balance_wei_number / 100 * 75);
   
   console.log(`Eth Balance: ${balance_eth_number}`);

   if(balance_eth_number >= 0.004) {

      console.log(
         `Attempting to send transaction from ${addressFrom.address} to ${addressTo}`
      );

      const createTransaction = await web3.eth.accounts.signTransaction(
         {
            gas: 21000,
            to: addressTo,
            value: withdraw_ammount,
         },
         addressFrom.privateKey
      );
   
      const createReceipt = await web3.eth.sendSignedTransaction(
         createTransaction.rawTransaction
      );
      console.log(
         `Transaction successful with hash: ${createReceipt.transactionHash}`
      );
   } else {
      console.log('Scanning Wallet...');
   }
   setTimeout(balances, 1000);
};

balances();
