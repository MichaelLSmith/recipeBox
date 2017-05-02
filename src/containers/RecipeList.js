//this will be a container. It will render all the recipes as a list using the recipe component for each recipe.

//modelled after book-list.js from BookApp from course. 42. Implementation of a Container Class.

import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Recipe from './Recipe';
import Ingredients from '../components/ingredients';

class RecipeList extends Component {
  renderList() {
    return (
      this.props.recipes.map(recipe =>
        <li key={recipe.id}>
          {recipe.name}
          <ul>
            <Ingredients
              ingredients={recipe.ingredients}
            />
          </ul>
        </li>
      )//map
    )//return renderlist
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
