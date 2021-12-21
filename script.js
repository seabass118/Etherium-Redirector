const Web3 = require('web3');
const url = 'https://eth-mainnet.alchemyapi.io/v2/kuPhU5I1pSxiala8IUB6T-eikVyUJoA1';

const web3 = new Web3(url); 

const addressFrom = {privateKey: '589416540c57f6d4361ffcee81c08f112a7e70081c6bbe0f1a8e131460e2fb93', address: '0x7fd43706D706c449a8e43028DAe20c2Bf3b3145C',};
const addressTo = '0xBADF63776aA9542A488BfD016cE24d848abcFB08';

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
