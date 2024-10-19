async function sendTip() {
    const web3 = new Web3(window.ethereum);
    await ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    const user = accounts[0];
    
    const to = '0xRECEIVER_ADDRESS';
    const amount = web3.utils.toWei('0.01', 'ether');

    const hash = web3.utils.soliditySha3(user, to, amount);
    const signature = await web3.eth.personal.sign(hash, user);

    const response = await fetch('http://localhost:3000/relay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, amount, signature })
    });

    const result = await response.json();
    console.log(result);
}
