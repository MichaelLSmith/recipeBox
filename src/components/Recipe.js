import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

import ModalWrapper from './Modal-Wrapper';

export default class Recipe extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <li key={recipe.id}>
        <h2>{recipe.recipeName}</h2>
        <Ingredients ingredients={recipe.ingredients} />
      </li>
      <ButtonToolbar>
        <Button bsStyle="danger">Delete</Button>
        <Button>Edit</Button>
        {/* This button to open modal needs to be separate from the ModalWrapper because it's in three different places. Somehow it has to pass a trigger to ModalWrapper that changes it's state from showModal from false > true */}
      </ButtonToolbar>
    );
  }
}
