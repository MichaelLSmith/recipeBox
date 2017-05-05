//this will be a container. It will render all the recipes as a list.
//the ingredients are from a separate component that renders the ingredients list.

//modelled after book-list.js from BookApp from course. 42. Implementation of a Container Class.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

// import Recipe from './Recipe';
import Ingredients from '../components/Ingredients';
import { getRecipes } from '../actions/actions';

class RecipeList extends Component {
  componentDidMount() {
    console.log('props in componentDidMount()');
    console.log(this.props);
    this.props.getRecipes();
  }
  renderList() {
    console.log('this.props in renderList()');
    console.log(this.props);
    const normRecipes = this.props.recipes;
    const { recipes } = this.props;
    console.log(recipes);
    if(!recipes) { return <div>Loading...</div>}
    return (
      <div>
        {recipes.map(recipe =>
          {return (
            <div>
              <li key={recipe.id}>{recipe.recipeName}</li>
              <Ingredients
                ingredients={recipe.ingredients}
              />
            </div>
          )}
        )}
      </div>
    )//return renderList
  }
  render() {
    console.log(this.props);
    return <ul>{this.renderList()}</ul>
  }
}
function mapStateToProps(state) {
  console.log(state.recipes);
  return state.recipes;
}
export default connect(mapStateToProps, { getRecipes })(RecipeList);
