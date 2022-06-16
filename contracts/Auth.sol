pragma solidity ^ 0.4.25;

contract Auth {
    struct UserDetail {
        address addr;
        string name;
        string certificateNumber;
        bool isRegistered ;
    }

    mapping(address => UserDetail) public user;

    // user registration function
    function register(
        address _address,
        string memory _name,
        string memory _certificateNumber
    ) public  {
        require(user[_address].addr != msg.sender);
        user[_address].addr = _address;
        user[_address].name = _name;
        user[_address].certificateNumber = _certificateNumber;
        user[_address].isRegistered = true;
    }

    function checkIsNgoRegistered(address ngoaddress) public view returns(bool) {
        if(user[ngoaddress].isRegistered){
            return true ;
        }else{
            return false;
        }
    }
}