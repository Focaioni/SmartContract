pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract FiorinoToken is StandardToken
{
	string  public constant name     = "Fiorino";
	string  public constant symbol   = "FIO";
	uint256 public constant decimals = 18;

	uint256 public constant TOKEN_CAP = 62.0 * 10e6 * 10e18; // 62,0 million FIOs total supply
	uint256 public constant ADV_CAP   =  6.2 * 10e6 * 10e18; //  6,2 million FIOs for the Advisor #1 (10%)
	
	constructor(address _adv) public 
	{
		totalSupply_         = TOKEN_CAP;
		balances[msg.sender] = totalSupply_.sub(ADV_CAP);
		balances[_adv]       = ADV_CAP;
	}
}
