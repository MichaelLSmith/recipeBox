import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { Button, ButtonToolbar } from 'react-bootstrap';
import changeCase from 'change-case';
// import toTitleCase from 'to-title-case'
//tried to add a normalizer, to title case names, but couldn't add space.


import { createRecipe, getRecipes, editRecipe } from '../actions/actions';

class RecipeForm extends Component {
  onCreateSubmit(values) {
    console.log('values in onSubmit', values);
    values.id = shortid.generate();
    this.props.createRecipe(values);
  }
  onEditSubmit(values) {
    console.log('onEditSubmit');
    this.props.editRecipe(values);
  }
  componentDidMount() {
    const { buttonType } = this.props;
    console.log('componentDidMount: buttonType',buttonType);
    if(buttonType === 'EDIT') {
      console.log('in buttonType if statement');
      console.log('props in if', this.props);
      this.props.initialize(this.props.recipe);
    }
  }

  renderEditForm() {
    const { handleSubmit, onCloseRequest } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onEditSubmit.bind(this))}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field
            name="recipeName"
            component="input" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Field name="ingredients" component="textarea" />
        </div>
        <ButtonToolbar>
          <Button
            onClick={onCloseRequest}
          >
              Cancel
            </Button>
          <Button type="submit"
            onClick={onCloseRequest}
          >Save
        </Button>
      </ButtonToolbar>
      </form>
    );
  }
  renderAddForm() {
    const { handleSubmit, onCloseRequest } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onCreateSubmit.bind(this))}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field
            name="recipeName"
            component="input" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Field name="ingredients" component="textarea" />
        </div>
        <ButtonToolbar>
          <Button
            onClick={onCloseRequest}
          >
              Cancel
            </Button>
          <Button type="submit"
            onClick={onCloseRequest}
          >Add Recipe
        </Button>
      </ButtonToolbar>
      </form>
    );
  }
  render() {
    // console.log('this.props in Render', this.props);
    const {buttonType} = this.props;
    switch (buttonType) {
      case 'ADD':
        return this.renderAddForm();
      case 'EDIT':
        return this.renderEditForm();
      default:
        return <div>UH OH!!</div>

    }
  }
}
//need to use both reduxForm and Connect.
RecipeForm = reduxForm({
  form: 'NewRecipe'
})(
  connect(null, { createRecipe, editRecipe })(RecipeForm)
);

export default RecipeForm;
