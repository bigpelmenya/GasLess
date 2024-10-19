const MicroTip = artifacts.require("MicroTip");

contract("MicroTip", accounts => {
    const [owner, tipper, receiver] = accounts;

    it("should allow tipping", async () => {
        const instance = await MicroTip.deployed();
        await instance.tip(receiver, web3.utils.toWei('0.01', 'ether'), { from: tipper, value: web3.utils.toWei('0.01', 'ether') });

        // Assert balance changes or event emission
    });
});
