const Web3 = require('web3');
const url = 'Etherium Node Connection Link (can use local node)';

const web3 = new Web3(url); 

const addressFrom = {privateKey: 'ENTER PRIVATE KEY', address: 'ENTER ADDRESS',};
const addressTo = 'ENTER ADDRESS TO SEND ETH TO';

const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom.address),
      'ether'
   );

   const floatBalance = parseFloat(balanceFrom);
   const x = floatBalance * 1000000000000000000;
   const y = Math.floor(x);
   const z = y - 0.004 * 100000000000000000;

   if(floatBalance >= 0.005) {
      
      console.log(
         `Attempting to send transaction from ${addressFrom.address} to ${addressTo}`
      );

      const createTransaction = await web3.eth.accounts.signTransaction(
         {
            gas: 21000,
            to: addressTo,
            value: z,
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
      console.log('balance chilling');
   }
   setTimeout(balances, 1000);
};

balances();
