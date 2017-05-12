import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

import Recipe from '../components/Recipe';
import { getRecipes, deleteRecipe, editRecipe } from '../actions/actions';
import ModalWrapper from '../components/Modal-Wrapper';

class App extends Component {
  //open/closing modal from parent:
  //from: https://github.com/reactjs/react-modal#examples
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false, recipe: undefined }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleDelete(id){
    console.log('id in handleDelete', id);
    this.props.deleteRecipe(id);
  }

  openModal(recipe) {
    //this 'recipe' variable points to a component-level state copy of the recipe as rendered by the Recipe Component. It's values will be used to populate the EDIT form. These values will then be merged with the App-State copy of the recipe to update the recipe in the entire app.
    console.log('openModal()');
    this.setState({modalIsOpen: true, recipe: recipe });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  renderList(recipes) {
    return (
      _.map(recipes, recipe =>
        <div key={recipe.id}>
          <Recipe recipe={recipe} />
        <ButtonToolbar>
          <Button
            bsStyle="danger"
            onClick={() => this.handleDelete(recipe.id)}
          >
            Delete
          </Button>
          <Button
            onClick={() => this.openModal(recipe)}
          >
            Edit
          </Button>
        </ButtonToolbar>
        </div>
      )
  )}

  render() {
    console.log(this.state);
    const { recipes } = this.props;
    console.log('recipes.length', Object.keys(recipes).length);
    if(Object.keys(recipes).length === 0) {
      return (
        <div>
          You don't have any Recipes. <br/>
          <Button
            bsStyle="primary"
            onClick={this.openModal}
          >
            Add a Recipe!
          </Button>
          <ModalWrapper
            isOpen={this.state.modalIsOpen}
            onCloseRequest={this.closeModal}
          />
        </div>
      );
    }
    return (
      <div>
        {this.renderList(recipes)}
        <Button
          bsStyle="primary"
          onClick={this.openModal}
        >
          Add Recipe
        </Button>
        <ModalWrapper
          isOpen={this.state.modalIsOpen}
          onCloseRequest={this.closeModal}
          recipe={this.state.recipe}
        />
        </div>
    );
  }//render()
}

function mapStateToProps(state) {
  // console.log(state);
  return state;
}
export default connect(mapStateToProps, { getRecipes, deleteRecipe, editRecipe })(App);
