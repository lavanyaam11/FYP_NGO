import React, { useState } from "react";
import { Table, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Donate from "./Donate";

export default function AvlNGO() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };


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
              <th>#</th>
              <th>NGO Name</th>
              <th>Wallet Address</th>
              <th>Cause Name</th>
              <th>Amount Required</th>
              <th>Description</th>
              <th>DOnate Here</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Smile Foundation</td>
              <td>wert234shjitjk</td>
              <td>Education</td>
              <td>140 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
              <td>
<<<<<<< HEAD
                <button disabled="true">Donate</button>
=======
                <button disabled={true}>Donate</button>
>>>>>>> 0c9771f4652f1b29ebcf39db7137b724c7d996c6
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Give India Foundation</td>
              <td>1wcfgmjksldjun</td>
              <td>Covid-19</td>
              <td>180 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
<<<<<<< HEAD
              <td  setModalIsOpen={setModalIsOpen}>
                <Donate show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
                  <button onClick={setModalIsOpenToTrue}>Donate</button>
                </Donate>
              </td>
=======
              <button disabled={false} onClick={()=>{console.log('Give India Foundation')}}>Donate</button>
>>>>>>> 0c9771f4652f1b29ebcf39db7137b724c7d996c6
            </tr>
            <tr>
              <td>3</td>
              <td>Care India</td>
              <td>carpoytg567vfrt</td>
              <td>Girl Eduaction</td>
              <td>150 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Smile Foundation</td>
              <td>wert234shjitjk</td>
              <td>Education</td>
              <td>140 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Give India Foundation</td>
              <td>1wcfgmjksldjun</td>
              <td>Covid-19</td>
              <td>180 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Care India</td>
              <td>carpoytg567vfrt</td>
              <td>Girl Eduaction</td>
              <td>150 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Smile Foundation</td>
              <td>wert234shjitjk</td>
              <td>Education</td>
              <td>140 Ether</td>
              <td>
                voluntary group or institution with a social mission, which
                operates independently from the government
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
