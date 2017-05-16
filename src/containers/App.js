import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';
import { Button, ButtonToolbar, ButtonGroup, Well, Panel, Accordion } from 'react-bootstrap';

// import Recipe from '../components/Recipe';
import Ingredients from '../components/Ingredients';
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
      _.map(recipes, (recipe, index) =>
        <div key={recipe.id}>
          <Accordion>
            <Panel bsStyle="success" header={recipe.recipeName} eventKey={index}>
              <Ingredients ingredients={recipe.ingredients} />
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
            </Panel>

          </Accordion>
        </div>
      )
  )}

  render() {
    // console.log(this.state);
    const { recipes } = this.props;
    // console.log('recipes.length', Object.keys(recipes).length);
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
        <Well>
          {this.renderList(recipes)}
        </Well>
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
