import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import RecipeForm from '../containers/Form';

export default class ModalContainer extends Component {
  constructor(props){
    super(props);
    this.state = { showModal: false }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
   this.setState({ showModal: false });
  }
  open() {
   this.setState({ showModal: true });
   console.log('open()');
  }
  render(){
    return (
      <div>
        <p>Open Modal Form</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Recipe or Edit Recipe??</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
