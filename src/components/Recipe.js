import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

import ModalWrapper from './Modal-Wrapper';
import Ingredients from './Ingredients';

function Recipe(props) {
  const { recipe } = props;
  // console.log('recipe in recipe Component', recipe);
  return (
    <div>
      <h2>{recipe.recipeName}</h2>
      <Ingredients ingredients={recipe.ingredients} />
    </div>
  );
}
export default Recipe;
