pragma solidity ^0.4.2;

contract DappToken1c7 {
    string public name = "Witticism";
    string public symbol = "WIT";
    string public standard = "DApp Token v1.0";
    uint256 public totalSupply;

    // 转账事件，用于监听
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approve(
        address indexed _owner, // 我 (_owner)
        address indexed _spender, // 允许用户 B (_spender)
        uint256 _value // 转账这么多 token
    );

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "余额不足以发送");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    // approve 允许第三方以我的名义转账
    // 允许某个账户 _spender 用 _value 数量的 token
    function approve(address _spender, uint256 _value) public returns (bool success) {
        return true;
    }


}