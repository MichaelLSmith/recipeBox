import React, { Component } from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';

import RecipeForm from '../containers/Recipe-Form';

export default class ModalWrapper extends Component {
  //props:
  //isOpen = bool
  //onCloseRequest = function --> closeModal as defined in App.js
  renderTitle(type) {
    switch(type) {
      case 'EDIT':
        return <Modal.Title className="text-center">Edit Recipe</Modal.Title>;
      case 'ADD': {
        return <Modal.Title className="text-center">Create New Recipe</Modal.Title>;
      }
    }
  }
  render(){
    // console.log(this.props);
    const {
      isOpen,
      onCloseRequest,
      buttonType,
      recipe
    } = this.props;
    return (
      <div>
        <Modal show={isOpen}
               onHide={onCloseRequest}
        >
          <Modal.Header>
            {this.renderTitle(buttonType)}
          </Modal.Header>
          <Modal.Body>
            <RecipeForm
              recipe={recipe}
              buttonType={buttonType}
              onCloseRequest={onCloseRequest}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={onCloseRequest}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
