import { authTokenAddress } from '../constants';
import { ethers } from 'ethers';
import auth from '../contracts/Auth.json'


export const register = async(address,name,password,idProof,isNgo) => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(authTokenAddress, auth.abi,signer);
    const registeration = await contract.register(account,name,password,idProof,isNgo);
    await registeration.wait();
    alert("Successful")
}

export const login = async(password) => {
    console.log("hi")
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(authTokenAddress, auth.abi,signer);
    const loginUser = await contract.login(account,password);
    console.log(loginUser)
}

export const logout = async() => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(authTokenAddress, auth.abi,signer);
    const logoutUser = await contract.logout(account);
    console.log(logoutUser)
    alert("Thank youfor using our website");
}

export const checkIsUserLogged = async() => {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(authTokenAddress, auth.abi,signer);
    const logoutUser = await contract.checkIsUserLogged(account);
    console.log(logoutUser)
    alert("Thank youfor using our website");
    
}