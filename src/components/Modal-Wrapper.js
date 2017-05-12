import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import RecipeForm from '../containers/Form';
import EditForm from '../containers/Edit-Form';

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
            {/* check if EDIT OR ADD and then print out different title: */}
            <Modal.Title>Create New Recipe or Edit Recipe??</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm
              recipe={this.props.recipe}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onCloseRequest}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
