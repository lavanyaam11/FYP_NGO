import React, { useState, useEffect } from 'react'
import { Table, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import { getHistory } from '../../utils/Ngo';

export default function History() {
    const [listOfDonationHistroy, setListOfDonationHistroy] = useState([]);
    useEffect(() => {
        getHistory(setListOfDonationHistroy)
    }, []);
    const navigate = useNavigate()
    return (
        <>
            <NavBar></NavBar>
            <div className='d-flex justify-content-lg-between p-2'>
                <h1 className="mb-3 fs-3 fw-normal text-center ">
                    History
                </h1>
                <Button variant="danger" type="danger" onClick={() => navigate('/ngo')} size="lg">
                    Back
                </Button>
            </div>
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>NGO Name</th>
                            <th>Cause Name</th>
                            <th>Donor Address</th>
                            <th>Amount Donated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfDonationHistroy.map((eachRequest, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <tr>
                                        <td>{eachRequest[0]}</td>
                                        <td>{eachRequest[1]}</td>
                                        <td>{eachRequest[2]}</td>
                                        <td>{parseInt(eachRequest[3]) / 1000000000000000000}</td>
                                    </tr>)
                            } else {
                                return (null)
                            }
                        })}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
