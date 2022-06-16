import React, { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Container,
  Table,
} from "react-bootstrap";
import NavBar from "./NavBar";
import { getRequest,voteForRequest } from '../../utils/Ngo'

export default function ApproveReject() {
  const [listOfRequest, setListOfRequest] = useState([]);
  useEffect(() => {
    getRequest(setListOfRequest)
  }, []);

  console.log(listOfRequest)
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h1 className="mb-3 fs-3 fw-normal text-center ">Approve/Reject</h1>
        <Table bordered hover>
          <thead className='text-center'>
            <tr>
              <th>NGO Name</th>
              <th>Wallet Address</th>
              <th>Cause Name</th>
              <th>Amount Required</th>
              <th>Description</th>
              <th>Approve Request</th>
            </tr>
          </thead>
          <tbody>
            {listOfRequest.map((eachRequest, index) => {
              if (index % 2 === 0) {
                return (
                  <tr>
                    <td>{eachRequest[0]}</td>
                    <td>{eachRequest[1]}</td>
                    <td>{eachRequest[2]}</td>
                    <td>{eachRequest[3]}</td>
                    <td>{parseInt(eachRequest[4])}</td>
                    <td>
                        <Button variant="outline-success" onClick={()=>{voteForRequest(0)}}>Approve</Button>
                    </td>
                  </tr>)
              } else {
                return (null)
              }
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
