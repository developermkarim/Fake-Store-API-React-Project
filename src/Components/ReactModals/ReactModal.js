import React from "react";
import { Modal,Button } from 'react-bootstrap';
import { useState } from "react";

const ReactModals = (props) => {
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Show Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <img  src={props.modalimg} alt="Modal_image" className='card-img-top w-50 mx-4' width={250} height={250}/>
            <Modal.Title>{props.ModalTitle} <br /> {props.modalPrice}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.detailsShow}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ReactModals;