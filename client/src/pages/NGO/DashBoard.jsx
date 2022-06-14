import React,{ useEffect,useState } from 'react'
import { Card, Container } from "react-bootstrap";
import {getRequest} from '../../utils/Ngo'

export default function DashBoard() {
  const [listOfRequest, setListOfRequest] = useState([]);
  useEffect(()=>{
    getRequest(setListOfRequest)
  },[])
  return (
    <>
      <Container>
      <h1 className="mb-3 fs-3 fw-normal text-center ">Active Request</h1>
      <div className="d-flex bd-highlight justify-content-sm-center flex-wrap">
        {listOfRequest.length === 0 && <p>No active Request :(</p>}
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