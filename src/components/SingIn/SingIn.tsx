import React from "react";
import { Button, Modal } from 'react-bootstrap';

export const SingIn = (props) => { 
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // style={{ maxWidth: '420px' }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sing in
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input type="text" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Password" className="form-control" />
          <div className="form-check">Forgot password?</div>
          <Button type="submit" variant="primary">Sing in</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
