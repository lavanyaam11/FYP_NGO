import React, { useState } from "react";
import { Navbar, Container, Dropdown, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import logo from '../assets/gec.jpeg'

export default function Header(props) {
    let history = useLocation();
    let { pathname } = history;

    const {ethereum} = window

    const [currentAccount, setCurrentAccount] = useState("");
  
    const connectWallet = async () => {
      try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
  
        setCurrentAccount(accounts[0]);
      } catch (error) {
        alert("Unable to connect to your account");
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
                            <Dropdown.Item
                                onClick={() => {
                                    props.setModalShow(true);
                                    props.setIsNgo(true);
                                    // handleNgoLogin()
                                    connectWallet()
                                }}
                            >NGO</Dropdown.Item>
                            <Dropdown.Item  onClick={() => {
                                props.setModalDonor(true)
                                props.setIsNgo(false)
                                connectWallet()
                            }}>Donor</Dropdown.Item>
                            <Dropdown.Item href="/ngoRegistration">Register Your NGO here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                {pathname !== '/' && pathname !== '/donorRegistration' && pathname !== '/ngoRegistration' && <Button variant='danger'>Log Out</Button>}

            </Container>
        </Navbar>
    )
}
