const UavChainABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pan",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phno",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_uavtype",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_modelnum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_serialnum",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ome",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_npl",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "govlist",
		"outputs": [
			{
				"internalType": "address",
				"name": "pid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "UserName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PAN",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "UAVType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ModelNum",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SerialNum",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "OME",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "NPL",
						"type": "string"
					}
				],
				"internalType": "struct UavAuth.UAVSpecs",
				"name": "specs",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const UavChainAddress = "0x204130eea1a80d5c71e6d25ecab1d1c1ee8793cc";

async function connectWallet() {
	const e2 = document.getElementById("wa");

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	await provider.send("eth_requestAccounts", []);
	const signer = provider.getSigner();
	e2.innerText = await signer.getAddress();
}
connectWallet();

async function accessrecord() {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const uavchain = new ethers.Contract(UavChainAddress, UavChainABI, provider);
	const signer = provider.getSigner();
	const e1 = document.getElementById("greating");
	let uavList = document.getElementById("uavlist");

	const data = await uavchain.govlist(0);
	const wa = await signer.getAddress();
	// console.log(wa);
	// console.log(data.UserName)
	//const len = govlist.
	if (data.pid == wa) {

		e1.innerText = "Hey! " + data.UserName;
	}
	else {
		e1.innerText = "Register your drone";
	}
	for (let i = 0; i < 10; i++) {
		let data1 = await uavchain.govlist(i);
		if (data1.pid == wa) {

			console.log(data1.UserName, data1.specs.UAVType);
			uavList.innerHTML += '<div class="color chinese-black">' + data1.specs.UAVType + '<span class="hex">' + data1.specs.ModelNum + '</span> </div>';
		}
	}
	



}
accessrecord();
