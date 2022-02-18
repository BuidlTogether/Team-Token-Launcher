let provider

let TLContract
let TokenList
let TLContractAddress = '0xabd8a23eb103cfb15221cbe910869859bbff1ad3'
let TLContractABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allTokens',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllTokens',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamName',
        type: 'string',
      },
    ],
    name: 'launchToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

let ERC20ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_teamName',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'teamURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

async function login() {
  console.log('started')
  await ethereum.enable()
  console.log('enabled')
  provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log('got provider')

  let accounts = await provider.listAccounts()

  signer = provider.getSigner(accounts[0])

  let balance = await signer.getBalance()
  let formattedBalance = await ethers.utils.formatEther(balance)
  document.getElementById('statusLabel').innerHTML = 'STATUS: CONNECTED'
  document.getElementById('addressLabel').innerHTML = 'Address: ' + accounts[0]
  document.getElementById('balanceLabel').innerHTML =
    'Balance: ' + formattedBalance + ' ONE'

  TLContract = new _ethers.Contract(TLContractAddress, TLContractABI, signer)
  TokenList = await getTokenDetails(TLContract, signer)
  console.log(TokenList)
  populateTokens(TokenList)
}

async function launchToken() {
  let teamName = document.getElementById('teamName').value
  let tokenName = document.getElementById('tokenName').value
  let tokenSymbol = document.getElementById('tokenSymbol').value
  let tokenURI = document.getElementById('tokenURI').value

  await TLContract.launchToken(teamName, tokenSymbol, tokenURI, tokenURI)
}
async function getTokenDetails(TLContract, signer) {
  console.log(TLContract)
  let tokenList = await TLContract.getAllTokens()
  //console.log(tokenList)
  let Details = []
  for (let i = 0; i < tokenList.length; i++) {
    let ERC20 = new _ethers.Contract(tokenList[i], ERC20ABI, signer)
    console.log(ERC20)
    let _symbol = ERC20.symbol()
    let _name = ERC20.name()
    let _teamName = ERC20.teamName()
    let _teamURI = ERC20.teamURI()
    let result = await Promise.all([_name, _symbol, _teamName, _teamURI])
    Details.push({
      name: result[0],
      symbol: result[1],
      teamName: result[2],
      teamURI: result[3],
    })
  }
  return Details
}
async function populateTokens(list) {
  for (let n = 0; n < list.length; n++) {
    let item = list[n]
    console.log(item)
    let row = document.createElement('tr')
    cell1 = document.createElement('n')
    cell2 = document.createElement('s')
    cell3 = document.createElement('tn')
    cell4 = document.createElement('turi')

    //cell1.innerHTML = item.name

    // cell2.innerHTML = item.symbol

    //cell3.innerHTML = item.teamName
    //cell4.innerHTML = item.teamURI
    // cell4.href = item.teamURI
    let textnode = document.createTextNode(item.name)
    let textnode1 = document.createTextNode(item.symbol)
    let textnode2 = document.createTextNode(item.teamName)
    let textnode3 = document.createTextNode(item.teamURI)
    cell1.appendChild(textnode)
    cell2.appendChild(textnode1)
    cell3.appendChild(textnode2)
    cell4.appendChild(textnode3)
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)

    document.getElementById('TeamsTable').appendChild(row)
  }
}
