// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

/// @title Sử Việt Badge
/// @notice Huy hiệu học tập không thể chuyển nhượng (soulbound).
///         Người học tự nhận huy hiệu bằng chữ ký do backend Sử Việt cấp
///         sau khi server kiểm tra thành tích trong cơ sở dữ liệu.
contract SuVietBadge is ERC1155, Ownable, EIP712 {
    string public name = "Su Viet Badge";
    string public baseURI;

    /// @notice Ví của backend dùng để ký xác nhận người học đủ điều kiện.
    address public trustedSigner;

    bytes32 private constant CLAIM_TYPEHASH =
        keccak256("Claim(address to,uint256 id,uint256 deadline)");

    error Soulbound();
    error AlreadyOwned();
    error Expired();
    error BadSignature();

    event BadgeClaimed(address indexed to, uint256 indexed id);
    event SignerChanged(address indexed signer);

    constructor(string memory baseUri, address signer)
        ERC1155("")
        Ownable(msg.sender)
        EIP712("SuVietBadge", "1")
    {
        baseURI = baseUri;
        trustedSigner = signer;
        emit SignerChanged(signer);
    }

    function uri(uint256 id) public view override returns (string memory) {
        return string.concat(baseURI, Strings.toString(id), ".json");
    }

    function setBaseURI(string memory newBase) external onlyOwner {
        baseURI = newBase;
    }

    function setTrustedSigner(address signer) external onlyOwner {
        trustedSigner = signer;
        emit SignerChanged(signer);
    }

    /// @notice Người học tự nhận huy hiệu với chữ ký của backend.
    /// @param id        Mã huy hiệu (thẻ nhân vật).
    /// @param deadline  Thời điểm hết hạn của chữ ký (unix seconds).
    /// @param signature Chữ ký EIP-712 của trustedSigner trên (msg.sender, id, deadline).
    function claim(uint256 id, uint256 deadline, bytes calldata signature) external {
        if (block.timestamp > deadline) revert Expired();
        if (balanceOf(msg.sender, id) != 0) revert AlreadyOwned();

        bytes32 digest = _hashTypedDataV4(
            keccak256(abi.encode(CLAIM_TYPEHASH, msg.sender, id, deadline))
        );
        if (ECDSA.recover(digest, signature) != trustedSigner) revert BadSignature();

        _mint(msg.sender, id, 1, "");
        emit BadgeClaimed(msg.sender, id);
    }

    /// @dev Chỉ cho phép mint (from == 0). Chặn chuyển nhượng và đốt: huy hiệu gắn với đúng người học.
    function _update(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory values
    ) internal override {
        if (from != address(0)) revert Soulbound();
        super._update(from, to, ids, values);
    }
}
