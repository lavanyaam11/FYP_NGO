import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Button, Modal } from 'react-bootstrap'

export default function DonorProfile(props) {
    const [orgAddress, setWallet] = useState("");
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/DonorHomePage');
        props.onHide();
    }
    const getWalletAddress = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(account)
    }
    getWalletAddress();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Donor Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Body>
                        <p>Wallet Address</p>
                        {orgAddress}
                    </Card.Body>
                </Card>
                <br/>
                <Button variant="danger" type="submit" onClick={onClickHandler}>
                    Cancel
                </Button>
                <br/>
            </Modal.Body>
        </Modal>
    )
}
