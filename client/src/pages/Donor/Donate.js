import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";

function Donate(props) {
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    navigate("/donateFunds");
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Donate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ABC</p>
        <p>Covid</p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Amount to Donate</Form.Label>
            <Form.Control type="password" placeholder="Ethers" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmitHandler}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Donate;
