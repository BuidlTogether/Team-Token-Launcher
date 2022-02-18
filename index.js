let provider

async function login(){
    console.log("started")
    await ethereum.enable()
    console.log("enabled")
    provider = new ethers.providers.Web3Provider(ethereum,'rinkeby');
    console.log("got provider")

    let accounts = await provider.listAccounts()

      signer = provider.getSigner(accounts[0]);

    let balance = await signer.getBalance()
    let formattedBalance = await ethers.utils.formatEther(balance)
    document.getElementById("statusLabel").innerHTML = "STATUS: CONNECTED"
    document.getElementById("addressLabel").innerHTML = "Address: " + accounts[0]
    document.getElementById("balanceLabel").innerHTML = "Balance: " + formattedBalance + " ETH"

      // console.log("signer " + signer)
      // ucashContract = new _ethers.Contract(ucashContractAddress, ucashABI, signer);
      // console.log("ucashContract " + ucashContract)
      // let ucashDecimals = await ucashContract.decimals();
      //
      // uCurrenciesContract = new _ethers.Contract(uCurrenciesContractAddress,uCurrenciesABI,signer);
      // uBountiesContract = new _ethers.Contract(uBountiesContractAddress,uBountiesABI,signer);
      //

}
