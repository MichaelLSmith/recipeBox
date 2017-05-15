import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { createRecipe, getRecipes } from '../actions/actions';

class RecipeForm extends Component {
  onSubmit(values) {
    console.log('values in onSubmit', values);
    values.id = shortid.generate();
    this.props.createRecipe(values);

  }
  renderEditForm() {
    return (
      <form onSubmit={this.onEditSubmit.bind(this)}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field name="recipeName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Field name="ingredients" component="textarea" />
        </div>
        <div>
          <button>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
  renderAddForm() {
    return (
      <form onSubmit={handleSubmit(this.onAddSubmit.bind(this))}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field name="recipeName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Field name="ingredients" component="textarea" />
        </div>
        <div>
          <button>Cancel</button>
          <button type="submit">Add Recipe</button>
        </div>
      </form>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor="recipeName">Recipe Name</label>
          <Field name="recipeName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Field name="ingredients" component="textarea" />
        </div>
        <div>
          <button>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    );
  }
}
//need to use both reduxForm and Connect.
RecipeForm = reduxForm({
  form: 'NewRecipe'
})(
  connect(null, { createRecipe })(RecipeForm)
);

export default RecipeForm;
