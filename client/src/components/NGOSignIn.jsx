import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Form, Button, Modal } from 'react-bootstrap'
import { login } from '../utils/Auth'

export default function NGOSignIn(props) {
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/ngoRegistration');
        props.onHide();
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const loggedIn = await login(password);
        if(loggedIn){
            navigate('/ngo');
            setPassword('')
        }else{
            alert("Invalid Credentials")
            navigate('/')
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Signin as NGO
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onSubmitHandler}>
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                Don't have an account?
                <Button variant="link" onClick={onClickHandler}>Sign Up</Button>
            </Modal.Footer>
        </Modal>
    )
}
