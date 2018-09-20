const FocaioniConfig    = require('../FocaioniConfig.js');
const FiorinoToken      = artifacts.require('./FiorinoToken.sol');
const FocaioniCrowdsale = artifacts.require('./FocaioniCrowdsale.sol');

module.exports = function(deployer, network, accounts) 
{
	const rate      = new web3.BigNumber(10000 * 10**18);

	const icoStart  = Math.floor(Date.now() / 1000) + 15;
	const icoStage2 = icoStart + 60;
	const icoStage3 = icoStage2 + 60;
	const icoEnd    = icoStage3 + 60;

//	const icoStart  = 1538352000;
//	const icoStage2 = 1539648000;
//	const icoStage3 = 1542672000;
//	const icoEnd    = 1546300800;

//	const w1        = FocaioniConfig.networks[network].admin.address;
//	const w2        = FocaioniConfig.networks[network].admin.address;
//	const w3        = FocaioniConfig.networks[network].admin.address;
//	const w4        = FocaioniConfig.networks[network].admin.address;
//	const operator  = FocaioniConfig.networks[network].operator.address;

	const w1        = accounts[1]; // ICO
	const w2        = accounts[2]; // ADV1
	const w3        = accounts[3]; // ADV2
	const w4        = accounts[4]; // OWN
	const operator  = accounts[5]; // OPER

	return deployer.deploy( FocaioniCrowdsale, rate, icoStart, icoStage2, icoStage3, icoEnd, w1, w2, w3, w4, operator );
// 		return deployer.deploy( FiorinoToken ).then( 
// 			function()
// 			{
// 				return deployer.deploy( FocaioniCrowdsale, rate, icoStart, icoStage2, icoStage3, icoEnd, w1, w2, w3, w4, operator, FiorinoToken.address );
// 	//				.then(
// 	//				function()
// 	//				{
// 	//					var tkn = FiorinoToken.at( FiorinoToken.address );
// 	//					tkn.transferOwnership( FocaioniCrowdsale.address )
// 	//				});
// 			});
}
