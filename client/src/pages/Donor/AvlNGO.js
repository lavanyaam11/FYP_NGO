import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Donate from "./Donate";
import { getRequest } from '../../utils/Ngo'

export default function AvlNGO() {
  const [modalIsOpen, setmodalisopen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState("");
  const [selectedCauseName, setSelectedCauseName] = useState("");
  const [listOfRequest, setListOfRequest] = useState([]);
  useEffect(() => {
    getRequest(setListOfRequest)
  }, [])

  const setModalIsOpenToTrue = (orgName, causeName) => {
    setSelectedOrg(orgName);
    setSelectedCauseName(causeName);
    setmodalisopen(true);
  };
  const disableButton = (numberOfVote,amountRequired,amountCollected) => {
    return numberOfVote > 5 && amountRequired <= amountCollected
  }
  console.log(disableButton(1,30,30))
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h1 className="mb-3 fs-3 fw-normal text-center ">
          List of Available NGOs
        </h1>
        <Table
          striped
          bordered
          hover
          variant="dark"
        >
          <thead className="text-center">
            <tr>
              <th>NGO Name</th>
              <th>Wallet Address</th>
              <th>Cause Name</th>
              <th>Description</th>
              <th>Amount Requested</th>
              <th>Amount Collected</th>
              <th>Donate</th>
            </tr>
          </thead>
          <tbody>
            {listOfRequest.map((eachRequest, index) => {
              if (index % 2 === 0) {
                const org = eachRequest[0];
                const cause = eachRequest[2];
                return (
                  <tr>
                    <td>{eachRequest[0]}</td>
                    <td>{eachRequest[1]}</td>
                    <td>{eachRequest[2]}</td>
                    <td>{eachRequest[3]}</td>
                    <td>{parseInt(eachRequest[4])}</td>
                    <td>{parseInt(eachRequest[5])}</td>
                    <td setModalIsOpen={setmodalisopen}>
                      <button 
                      onClick={() => setModalIsOpenToTrue(org, cause)}
                      disabled={disableButton(parseInt(eachRequest[6]),parseInt(eachRequest[4]),parseInt(eachRequest[5]))}
                      >
                        Donate
                      </button>
                      <Donate show={modalIsOpen}
                        onHide={() => setmodalisopen(false)}
                        orgname={selectedOrg}
                        causename={selectedCauseName}
                         />
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
