import React, { useState } from "react";
import { Navbar, Container, Dropdown, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/gec.jpeg'
import { checkIsNgo } from '../utils/Auth'

export default function Header(props) {
    let history = useLocation();
    const navigate = useNavigate();
    let { pathname } = history;

    const { ethereum } = window

    const connectNgoWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            if (checkIsNgo()) {
                navigate('/ngo');
            } else {
                alert("Your wallet is not yet registered as ngo")
                navigate('/');
            }
        } catch (error) {
            alert("Unable to connect to your account");
        }
    };
    const connectDonorWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            navigate('/donorHomePage');
        } catch (error) {
            alert("Unable to connect to your account");
        }
    };
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
                                    connectNgoWallet()
                                }}
                            >NGO</Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                connectDonorWallet();
                            }}>Donor</Dropdown.Item>
                            <Dropdown.Item href="/ngoRegistration">Register Your NGO here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                {pathname !== '/' && pathname !== '/donorRegistration' && pathname !== '/ngoRegistration' && <Button variant='danger'>Log Out</Button>}

            </Container>
        </Navbar>
    )
}
