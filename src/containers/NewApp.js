//this will be a container. It will render all the recipes as a list.
//the ingredients are from a separate component that renders the ingredients list.

//this will replace App.js and follow structure.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';


// import Recipe from './Recipe';
import Ingredients from '../components/Ingredients';
import { getRecipes, deleteRecipe, editRecipe } from '../actions/actions';
import ModalWrapper from '../components/Modal-Wrapper';

class App extends Component {
  //open/closing modal from parent:
  //from: https://github.com/reactjs/react-modal#examples
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const { recipes } = this.props;
    if(Object.key(recipes).length === 0) {
      return (
        <div>
          You don't have any Recipes! <br/>
          <button>
            Add Recipes (this will be a react-bootstrap button)
          </button>
        </div>
      );
    }
    <ul>
      {_.map(recipes, recipe) =>
        console.log('recipe in map', recipe);
        return <Recipe recipe={recipe} />;
      }
    </ul>
    <Button
      bsStyle="primary"
      onClick={this.openModal}
    >
      Open Modal
    </Button>
    <ModalWrapper
      isOpen={this.state.modalIsOpen}
      onCloseRequest={this.closeModal}
    />

  }//render()
}


function mapStateToProps(state) {
  // console.log(state);
  return state;
}
export default connect(mapStateToProps, { getRecipes, deleteRecipe, editRecipe })(App);
