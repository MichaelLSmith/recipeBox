//this will be a container. It will render all the recipes as a list.
//the ingredients are from a separate component that renders the ingredients list.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';

// import Recipe from './Recipe';
import Ingredients from '../components/Ingredients';
import { getRecipes } from '../actions/actions';

class RecipeList extends Component {
  componentDidMount() {
    // console.log('props in componentDidMount()');
    // console.log(this.props);
    this.props.getRecipes();
  }
  renderList() {
    // console.log('this.props in renderList()');
    // console.log(this.props);
    const { recipes } = this.props;
    // console.log(recipes);
    if(recipes.length == 0) {
      return <div>Add a recipe. Turn this into a button</div>
    }
    return (
      // <div>recipes here</div>
        _.map(recipes, recipe => {
          // console.log(recipe);
          return (
            <div>
              <li key={recipe.id}>{recipe.recipeName}</li>
              <Ingredients
                ingredients={recipe.ingredients}
              />
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-default">Delete</button>
            </div>
          )}
        )//map
    )//return renderList
  }
  render() {
    // console.log(this.props);
    return <ul>{this.renderList()}</ul>
  }
}
function mapStateToProps(state) {
  // console.log(state.recipes);
  return state.recipes;
}
export default connect(mapStateToProps, { getRecipes })(RecipeList);
