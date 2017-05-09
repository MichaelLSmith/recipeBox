//this will be a container. It will render all the recipes as a list.
//the ingredients are from a separate component that renders the ingredients list.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';

// import Recipe from './Recipe';
import Ingredients from '../components/Ingredients';
import { getRecipes, deleteRecipe, editRecipe } from '../actions/actions';

class RecipeList extends Component {
  componentDidMount() {
  }
  renderList() {
    console.log('this.props in renderList()', this.props);
    const { recipes } = this.props;
    console.log('recipes in renderList():',recipes);
    console.log( Object.keys(recipes).length );
    if(Object.keys(recipes).length === 0) {
      return (
        <div>You don't have any recipes! <br/>
          <button className="btn btn-default">Add Recipe</button>
        </div>
      )
    }
    return (
      <div>recipes here
        {/* {_.map(recipes, recipe => {
          console.log(recipe);
          return (
            <div>
              <li key={recipe.id}>{recipe.recipeName}</li>
              <Ingredients
                ingredients={recipe.ingredients}
              />
              <button
                className="btn btn-danger"
                onSubmit={this.props.deleteRecipe(recipe.id)}
              >
                Delete
            </button>
            <button
              className="btn btn-default"
              onSubmit={this.props.editRecipe(recipe.id)}
              //this needs to open modal edit form.
            >
              Edit
          </button>
            </div>
          )}
        )}//map */}
          <button className="btn btn-default">Add Recipe</button>
        </div>
    )//return renderList
  }
  render() {
    // console.log(this.props);
    return <ul>{this.renderList()}</ul>
  }
}
function mapStateToProps(state) {
  // console.log(state);
  return state;
}
export default connect(mapStateToProps, { getRecipes, deleteRecipe, editRecipe })(RecipeList);
