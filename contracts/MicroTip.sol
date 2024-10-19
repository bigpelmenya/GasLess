// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MicroTip is Ownable {
    using ECDSA for bytes32;

    // Event for successful tips
    event Tipped(address from, address to, uint256 amount);

    // Function to handle tips
    function tip(address payable _to, uint256 _amount, bytes memory signature) external payable {
        require(msg.value == _amount, "Sent value must equal the tip amount.");

        // Verify the signature (for meta-transactions)
        bytes32 hash = keccak256(abi.encodePacked(msg.sender, _to, _amount));
        address signer = hash.toEthSignedMessageHash().recover(signature);
        require(signer == msg.sender, "Invalid signature.");

        // Transfer the tip
        _to.transfer(_amount);
        emit Tipped(msg.sender, _to, _amount);
    }

    // Withdraw function for relayer (if needed)
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
