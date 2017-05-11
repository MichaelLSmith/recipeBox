import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import RecipeForm from '../containers/Form';

export default class ModalWrapper extends Component {
  //props:
  //isOpen = bool
  //onCloseRequest = function --> closeModal as defined in App.js
  render(){
    console.log(this.props);
    return (
      <div>
        <Modal show={this.props.isOpen}
               onHide={this.props.onCloseRequest}
        >
          <Modal.Header>
            <Modal.Title>Create New Recipe or Edit Recipe??</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RecipeForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onCloseRequest}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
