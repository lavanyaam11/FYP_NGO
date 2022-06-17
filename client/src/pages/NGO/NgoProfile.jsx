import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Button, Modal } from 'react-bootstrap'
import { getNgoName } from '../../utils/Auth'

export default function NGOProfile(props) {
    const [orgAddress, setWallet] = useState("");
    const [ngoName, setNgoName] = useState("");
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/ngo');
        props.onHide();
    }
    const getWalletAddress = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(account)
        const name = await getNgoName()
        setNgoName(name);
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
                    NGO Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <p>NGO Name</p>
                            {ngoName}
                        </Card.Text>
                        <Card.Text>
                            <p>Wallet Address</p>
                            {orgAddress}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Button variant="danger" type="submit" onClick={onClickHandler}>
                    Cancel
                </Button>
                <br />
            </Modal.Body>
        </Modal>
    )
}
