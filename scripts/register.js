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

async function registerUav()
{
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();

    const name = document.getElementById("name1");
    const pan = document.getElementById("pan1");
	const phno = document.getElementById("phno1");
	const location = document.getElementById("location1");
	const dronetype = document.getElementById("dronetype1");
	const modelno = document.getElementById("modelno1");
	const serialno = document.getElementById("serialno1");
	const ome = document.getElementById("ome1");
	const npl = document.getElementById("npl1");

	const uavchain = new ethers.Contract(UavChainAddress,UavChainABI,provider);
	const user = await uavchain.connect(signer).registerUser(name.value,pan.value,phno.value,location.value,dronetype.value,modelno.value,serialno.value,ome.value,npl.value);
	await user.wait();
}