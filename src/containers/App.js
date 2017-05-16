import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup, Jumbotron, Panel } from 'react-bootstrap';

import Recipe from '../components/Recipe';
import { getRecipes, deleteRecipe, editRecipe } from '../actions/actions';
import ModalWrapper from '../components/Modal-Wrapper';

class App extends Component {
  //open/closing modal from parent:
  //from: https://github.com/reactjs/react-modal#examples
  constructor(props) {
    super(props);
      this.state = {
        modalIsOpen: false,
        recipe: undefined,
        buttonType: undefined
      }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleDelete(id){
    console.log('id in handleDelete', id);
    this.props.deleteRecipe(id);
  }
  onEditClick(recipe, buttonType) {
    console.log('buttonType in onEditClick()', buttonType);
    this.openModal();
    this.setState({buttonType: buttonType, recipe: recipe});
  }
  onAddClick(buttonType) {
    console.log(buttonType);
    this.openModal();
    this.setState({buttonType: buttonType});
  }
  openModal() {
    console.log('openModal()');
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  renderList(recipes) {
    return (
      _.map(recipes, recipe =>

        <Jumbotron key={recipe.id}>
          <Recipe recipe={recipe} />
        <ButtonToolbar>
          <Button
            bsStyle="danger"
            onClick={() => this.handleDelete(recipe.id)}
          >
            Delete
          </Button>
          <Button
            onClick={() => this.onEditClick(recipe, 'EDIT')}
          >
            Edit
          </Button>
        </ButtonToolbar>
      </Jumbotron>
      )
  )}

  render() {
    console.log(this.state);
    const { recipes } = this.props;
    console.log('recipes.length', Object.keys(recipes).length);
    if(Object.keys(recipes).length === 0) {
      return (
        <div>
          <h3>
            <h3>You don't have any Recipes.</h3>
          </h3>
          <Button
            bsStyle="primary"
            onClick={() => this.onAddClick('ADD')}
          >
            Add a Recipe!
          </Button>
          <ModalWrapper
            isOpen={this.state.modalIsOpen}
            onCloseRequest={this.closeModal}
            buttonType={this.state.buttonType}
          />
        </div>
      );
    }
    return (
      <div>
        {this.renderList(recipes)}
        <Button
          bsStyle="primary"
          onClick={() => this.onAddClick('ADD')}
        >
          Add Recipe
        </Button>
        <ModalWrapper
          isOpen={this.state.modalIsOpen}
          onCloseRequest={this.closeModal}
          recipe={this.state.recipe}
          buttonType={this.state.buttonType}
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
