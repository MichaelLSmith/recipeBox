import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { createRecipe, getRecipes, editRecipe } from '../actions/actions';

class RecipeForm extends Component {
  componentDidMount() {
    this.props.initialize(this.props.recipe)
  }
  onSubmit(values, formType) {
    console.log('values in onSubmit', values);
    //formType will indicate whether it's an EDIT or ADD Recipe. Have an if to call either createRecipe or editRecipe
    //For ADD:
      // values.id = shortid.generate();
      // this.props.createRecipe(values);
    //For EDIT:
    this.props.editRecipe(values);
  }
  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
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
