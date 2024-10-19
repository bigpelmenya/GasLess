const express = require('express');
const Web3 = require('web3');
const app = express();
const port = 3000;

const web3 = new Web3("https://1rpc.io/base");

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = require("./abi.json");
const contract = new web3.eth.Contract(abi, contractAddress);

const relayerAddress = "REPLACEME_WITH_RELAYER_ADDRESS";
const privateKey = "REPLACEME_WITH_PRIVATE_KEY";

app.post('/relay', async (req, res) => {
    const { to, amount, signature } = req.body;

    const data = contract.methods.tip(to, amount, signature).encodeABI();

    const tx = {
        from: relayerAddress,
        to: contractAddress,
        gas: 2000000,
        data
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    res.send({ status: 'success', txHash: receipt.transactionHash });
});

app.listen(port, () => {
    console.log(`Relayer listening at http://localhost:${port}`);
});
