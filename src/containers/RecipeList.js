//this will be a container. It will render all the recipes as a list using the recipe component for each recipe.

//modelled after book-list.js from BookApp from course. 42. Implementation of a Container Class.

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Recipe from './Recipe';
// import Ingredients from '../components/ingredients';

class RecipeList extends Component {
  renderList() {
    console.log(this.props.recipes);

    return (
      this.props.recipes.map(recipe =>
        <li>{recipe.name}</li>
        

      )
    )
  }
  render() {
    return <ul>{this.renderList()}</ul>
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}
export default connect(mapStateToProps)(RecipeList);
