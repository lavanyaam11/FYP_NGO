import React, { useContext,useState } from "react";
import { Navbar, Container, Dropdown, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import logo from '../assets/gec.jpeg'
import { ethers } from 'ethers';
import { TransactionContext } from "../context/TransactionContext";

export default function Header(props) {
    let history = useLocation();
    let { pathname } = history;

    const {ethereum} = window

    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    const connectWallet = async () => {
      try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
  
        setCurrentAccount(accounts[0]);
        window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
    };
  
  
    console.log(currentAccount)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                {pathname === '/' &&
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Login As
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#"
                                onClick={() => {
                                    props.setModalShow(true);
                                    props.setIsNgo(true);
                                    // handleNgoLogin()
                                    connectWallet()
                                }}
                            >NGO</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={() => {
                                props.setModalDonor(true)
                                props.setIsNgo(false)
                            }}>Donor</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                {pathname !== '/' && pathname !== '/donorRegistration' && pathname !== '/ngoRegistration' && <Button variant='danger'>Log Out</Button>}

            </Container>
        </Navbar>
    )
}
