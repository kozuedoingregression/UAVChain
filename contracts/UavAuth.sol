// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract UavAuth {
    struct UserDetails {
        address pid;
        string UserName;
        string PAN;
        string phNo;
        string location;
        UAVSpecs specs;
    }

    struct UAVSpecs {
        string UAVType;
        string ModelNum;
        string SerialNum;
        string OME;
        string NPL;
        // string ManufacturerName;
        // string ManufacturerAddress;
        // string ManufacturerNationality;
        // string TakeoffWeight;
        // string HeightAttainable;
        // string Payload;
    }

    UserDetails[] public govlist;
    //mapping(address => UserDetails) public Users;

    function registerUser(
        string memory _username,
        string memory _pan,
        string memory _phno,
        string memory _location,
        string memory _uavtype,
        string memory _modelnum,
        string memory _serialnum,
        string memory _ome,
        string memory _npl
    ) public {
        UAVSpecs memory newspecs = UAVSpecs(
            _uavtype,
            _modelnum,
            _serialnum,
            _ome,
            _npl
        );
        UserDetails memory newuser = UserDetails(
            msg.sender,
            _username,
            _pan,
            _phno,
            _location,
            newspecs
        );
        //Users[msg.sender] = newuser;
        govlist.push(newuser);
    }

    // function getuser(address _wa)
    //     public
    //     view
    //     returns (
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory,
    //         string memory
    //     )
    // {
    //     UserDetails memory user = Users[_wa];

    //     return (
    //         user.UserName,
    //         user.PAN,
    //         user.phNo,
    //         user.location,
    //         user.specs.UAVType,
    //         user.specs.ModelNum,
    //         user.specs.SerialNum,
    //         user.specs.OME,
    //         user.specs.NPL
    //     );
    // }
}

