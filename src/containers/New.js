import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createRecipe } from '../actions/actions';

class NewRecipe extends Component {
  onSubmit(values) {
    //this = component
    console.log(values);
    this.props.createRecipe(values);

  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create New Recipe</h3>
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
NewRecipe = reduxForm({
  form: 'NewRecipe'
})(
  connect(null, { createRecipe })(NewRecipe)
);

export default NewRecipe;
