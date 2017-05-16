import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup, Panel } from 'react-bootstrap';

import ModalWrapper from './Modal-Wrapper';
import Ingredients from './Ingredients';

function Recipe(props) {
  const { recipe } = props;
  // console.log('recipe in recipe Component', recipe);
  return (
    <div>
      <Panel header={recipe.recipeName}>
        <Ingredients ingredients={recipe.ingredients} />
      </Panel>
    </div>
    );
}
export default Recipe;
