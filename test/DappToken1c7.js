var DappToken = artifacts.require('./DappToken1c7.sol');

contract('DappToken', function(accounts) {
  var tokenInstance;
  var scaledSupply;

  it('初始化智能合约，有正确的配置值', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'Witticism', '有正确的名字');
      return tokenInstance.symbol()
    }).then(function(symbol) {
      assert.equal(symbol, 'WIT', '有正确的符号');
      return tokenInstance.standard();
    })
    // .then(function(standard) {
    //   assert.equal(standard, 'DApp Token v1.0', '有正确的标准');
    //   return tokenInstance.decimals();
    // }).then(function(decimals) {
    //   assert.equal(decimals, 18, '有正确的位数');
    // });
  });

  // it('在部署的时候分配初始 token', function() {
  //   return DappToken.deployed().then(function(instance) {
  //     tokenInstance = instance;
  //     return tokenInstance.totalSupply();
  //   }).then(function(totalSupply) {
  //     assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to the initial supply');
  //     return tokenInstance.balanceOf(accounts[0]);
  //   }).then(function(adminBalance) {
  //     assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
  //   });
  // });

  // it('转账', function(){
  //   return DappToken.deployed().then(function(instance){
  //     // require(   )
  //   })
  // });

  // // 
  // it('approves tokens for delegated transfer', function(){
    
  // })

});
