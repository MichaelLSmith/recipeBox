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
    this.state = { modalIsOpen: false }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleDelete(id){
    console.log('id in handleDelete', id);
    this.props.deleteRecipe(id);
  }

  openModal() {
    this.setState({modalIsOpen: true});
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
          <Button>Edit</Button>
        </ButtonToolbar>
        </div>
      )
  )}

  render() {
    const { recipes } = this.props;
    console.log('recipes.length', Object.keys(recipes).length);
    if(Object.keys(recipes).length === 0) {
      return (
        <div>
          You don't have any Recipes! <br/>
          <button>
            Add Recipes (this will be a react-bootstrap button)
          </button>
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
