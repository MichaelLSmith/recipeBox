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
    const { recipes } = this.props;
    console.log(recipes);
    if(recipes[0] === null) {
      return <div>Add a recipe - turn this into a button</div>
    }
    console.log(recipes);
    return (
      recipes.map(recipe =>
        <li key={shortid.generate()}>
          {recipe.recipeName}
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
    console.log(this.props);
    return <ul>{this.renderList()}</ul>
  }
}
function mapStateToProps(state) {
  console.log(state.recipes);
  return {
    recipes: state.recipes
  }
}
export default connect(mapStateToProps, { getRecipes })(RecipeList);
