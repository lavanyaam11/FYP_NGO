import React,{ useEffect,useState } from 'react'
import image from "../../assets/oneee.jpg";
import { Card, Container } from "react-bootstrap";
import { tokenAddress } from '../../constants';
import { ethers } from 'ethers'
import donation from '../../artifacts/contracts/DonationToOrganization.sol/DonationToOrganization.json'

export default function DashBoard() {
  const [listOfRequest, setListOfRequest] = useState([]);
  const len = 7;
  const getRequest = async() =>{
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, donation.abi, signer)
      try {
        for(let i = 0; i<len; i++){
          const data = await contract.requests(i);
          setListOfRequest(prev=>[...prev,data])
        }
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }
  useEffect(()=>{
    getRequest()
  },[])
  return (
    <>
      <Container>
      <h1 className="mb-3 fs-3 fw-normal text-center ">Active Request</h1>
      <div className="d-flex bd-highlight justify-content-sm-center flex-wrap">
        {listOfRequest.map((eachRequest,index)=>{
          if(index%2 === 0) {
          return (
            <Card style={{ width: "20rem", height: "21.5rem"}} className="m-2 bd-highlight"
            key={index}>
          <Card.Body>
            <Card.Img variant="top" src="oneee.jpg" />
            <Card.Title>Organization Name: {eachRequest[0]}</Card.Title>
            <Card.Text>Cause: {eachRequest[2]}</Card.Text>
            <Card.Text>
              Description: {eachRequest[3]}
            </Card.Text>
            <Card.Text>
              Amount Required: {parseInt(eachRequest[4])}
            </Card.Text>
          </Card.Body>
        </Card>
          )}else{
            return null
          }
        })}
        </div>
      </Container>
    <br/>
    </>
  )
}