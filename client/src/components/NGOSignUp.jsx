import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import Header from './Header';
import { register } from '../utils/Auth'

export default function NGOSignUp() {
    
    const [orgName, setOrgName] = useState("");
    const [certificate, setCertificate] = useState("");
    const [orgAddress, setWallet] = useState("");

    const getWalletAddress = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(account)
    }
    getWalletAddress();

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await register(orgAddress, orgName, certificate);
            navigate('/')
        } catch {
            alert("Registration failed,as this account is already register,Kindly login");
            navigate('/')
        }
    }
    return (
        <>
            <Header />
            <br />
            <Container>
                <h1 className="mb-3 fs-3 fw-normal text-center ">Register As NGO</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formOrganizationName">
                        <Form.Label>Organiation Name</Form.Label>
                        <Form.Control type="text" value={orgName} onChange={(e) => setOrgName(e.target.value)} placeholder="Enter your Organization" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId='formBasicCerificate'>
                        <Form.Label>Certificate Number</Form.Label>
                        <Form.Control type="text" value={certificate} onChange={(e) => setCertificate(e.target.value)} placeholder='Enter Certificate Number' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicWallet">
                        <Form.Label>Wallet address</Form.Label>
                        <Form.Control type="text" value={orgAddress} placeholder="Enter your wallet address" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onSubmitHandler}>
                        Sign Up
                    </Button>
                </Form>
            </Container>
            <br />
        </>
    )
}
