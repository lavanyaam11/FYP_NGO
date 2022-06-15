import React, { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { useNavigate, Navigate } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";
import { login } from '../utils/Auth'

export default function DonorSignIn(props) {
  // const [password, setPassword] = useState();
  // const navigate = useNavigate();
  // const onClickHandler = () => {
  //   navigate("/donorRegistration");
  //   props.onHide();
  // };

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  })

//   const onSubmitHandler = async(e) => {
//     e.preventDefault();
//     const loggedIn = await login(password);
//     if(loggedIn){
//         navigate('/donorHomePage');
//         setPassword('')
//     }else{
//         alert("Invalid Credentials")
//         navigate('/')
//     }
// }

const btnhandler = () => {
  
  // Asking if metamask is already present or not
  if (window.ethereum) {

    // res[0] for fetching a first wallet
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => accountChangeHandler(res[0]));
        <Navigate 
          to = {{
            pathname: "/donorHomePage"
          }}
        />
  } else {
    alert("install metamask extension!!");
  }
};

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

const accountChangeHandler = (account) => {
  // Setting an address data
  setdata({
    address: account,
  });

      // Setting a balance
      getbalance(account);
};

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Signin as Donor
        </Modal.Title>
      </Modal.Header>
      console.log({data.address});
      <Modal.Body>
      <Button onClick={btnhandler} variant="primary">
          Connect to wallet
        </Button>
      </Modal.Body>
    </Modal>
  );
}
