import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Container } from "react-bootstrap";
import NavBar from "./NavBar";
import { tokenAddress } from '../../constants';
import { ethers } from 'ethers'
import donation from '../../artifacts/contracts/DonationToOrganization.sol/DonationToOrganization.json'

function DonateFunds() {
  const [orgName, setOrgName] = useState();
  const [causeName, setCauseName] = useState();
  let data;

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
      const contract = new ethers.Contract(tokenAddress, donation.abi, provider)
      console.log({ contract })
      try {
        console.log("Hi")
        data = await contract.requests(0);
        console.log('data: ', JSON.stringify(data))
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  useEffect(() => {
    fetchGreeting()
  }, [])

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  const donate = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
        await requestAccount();
  
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: '0x35eF934b3803491A3B813b9058DF486c2c94EB11',
        value: ethers.utils.parseEther('10')
      });
      // console.log({ ether, addr });
      console.log("tx", tx);
      // setTxs([tx]);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <br></br>
      <Container fluid="md">
        <h1 className="mb-3 fs-3 fw-normal text-center ">DONATE HERE</h1>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="orgName">
            <Form.Label column sm="3">
              Name of the Organization
            </Form.Label>
            <Col sm="8">
              <Form.Select value={orgName} onChange={e => setOrgName(e.target.value)}>
                <option selected disabled>
                  Available NGOs
                </option>

                <option>ABC</option>
                <option >Give India Foundation</option>
                <option>Care India</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="orgName">
            <Form.Label column sm="3">
              Cause
            </Form.Label>
            <Col sm="8">
              <Form.Select value={causeName} onChange={e => setCauseName(e.target.value)}>
                <option selected disabled>
                  Cause
                </option>
                <option >education</option>
                <option >Covid-19</option>
                <option >Girl Eduaction</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <br></br>
          <div class="d-grid col-2 mx-auto">
            <button class="btn btn-success" type="button" onClick={donate}>
              Donate
            </button>
          </div>
        </Form>
        <br></br>
      </Container>
    </>
  );
}

export default DonateFunds;
