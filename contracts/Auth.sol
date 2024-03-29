pragma solidity ^ 0.4.25;

contract Auth {
    struct UserDetail {
        address addr;
        string name;
        string password;
        string identityProof;
        bool isUserLoggedIn;
        bool isNGO;
    }

    mapping(address => UserDetail) user;

    // user registration function
    function register(
        address _address,
        string memory _name,
        string memory _password,
        string memory _identityProof,
        bool _isNGO
    ) public returns (bool) {
        require(user[_address].addr != msg.sender);
        user[_address].addr = _address;
        user[_address].name = _name;
        user[_address].password = _password;
        user[_address].identityProof = _identityProof;
        user[_address].isUserLoggedIn = false;
        user[_address].isNGO = _isNGO;
        return true;
    }

    // user login function
    function login(address _address, string memory _password)
        public
        returns (bool)
    {
        if (
            keccak256(abi.encodePacked(user[_address].password)) ==
            keccak256(abi.encodePacked(_password))
        ) {
            user[_address].isUserLoggedIn = true;
            return user[_address].isUserLoggedIn;
        } else {
            return false;
        }
    }

    // check the user logged In or not
    function checkIsUserLogged(address _address) public view returns (bool) {
        return (user[_address].isUserLoggedIn);
    }

    // logout the user
    function logout(address _address) public {
        user[_address].isUserLoggedIn = false;
    }
}