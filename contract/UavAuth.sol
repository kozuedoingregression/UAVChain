//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract UavAuth
{    
    struct UserDetails
    {
        address pid;
        string UserName;
	string PAN;
        string phNo;
        string loaction;
        
    }

    struct UAVRecordBlock
    {
	address pid;
        string UAVType;
	string ModelNum;
	string SerialNum;
	string OME;
	string NPL;
	string ManufacturerName;
	string ManufacturerAddress;
	string ManufacturerNatioality;
	string TakeoffWeight;
	string HeightAttainalble;
	string Payload;
    }
    UAVRecordBlock[] public Records;
    UserDetails[] public User;

    function getpid()public view returns(uint){
        return pid;
    }

    function registerUser(address _wa, string memory _userName,string memory _pan,string memory _phNo,string memory _location)public 
    {
        User.push(UserDetails(_wa,_userName,_pan,_phNo,_location));
    }

    function registerUAV(address _wa, string memory _UAVType, string memory _ModelNum, string memory _SerialNum, string memory _OME, string memory _NPL, string memory _MName, string memory _MA, string memory _MNation, string memory _takeoff, string memory _alt, string memory _payload)public
    {
        UAVRecordBlock memory newrecord;
	
	newrecord.pid = _wa;
	newrecord.UAVType = _UAVType;
	newrecord.ModelNum = _ModelNum;
	newrecord.SerialNum = _SerialNum;
	newrecord.OME = _OME;
	newrecord.NPL = _NPL;
	newreocrd.ManufacturerName = _MName;
	newrecord.ManufacturerAddress = _MA;
	newrecord.ManufacturerNationality = _MNation;
	newrecord.TakeoffWeight = _takeoff;
	newrecord.HeightAttainable = _alt;
	newrecord.Payload = _papyload;
       
        Records.push(newrecord);
    }

}




