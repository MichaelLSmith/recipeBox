//this will be a container. It will render all the recipes as a list.
//the ingredients are from a separate component that renders the ingredients list.

//this could become App.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import _ from 'lodash';


// import Recipe from './Recipe';
import Ingredients from '../components/Ingredients';
import { getRecipes, deleteRecipe, editRecipe } from '../actions/actions';
import ModalWrapper from '../components/Modal-Wrapper';

class RecipeList extends Component {
  handleDelete(id){
    console.log('id in handleDelete', id);
    this.props.deleteRecipe(id);
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
    //separate each recipe into a separate component
    return (
        _.map(recipes, recipe => {
          // console.log('recipe in map', recipe);
          return (
            <div key={recipe.id}>
              <li>{recipe.recipeName}</li>
              <Ingredients
                ingredients={recipe.ingredients}
              />
              <button
                className="btn btn-danger"
                onClick={() => this.handleDelete(recipe.id)}
              >
                Delete
              </button>
            {/* this needs to open modal edit form. */}
              <button
                className="btn btn-default"
                //onSubmit: needs to open modal. It could be another instance of New.js.
              >
                Edit</button>
            </div>
          )}//return map
        )//map

    );//return renderList
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>{this.renderList()}</ul>
        <button>Add Recipe</button>
        <ModalWrapper />
      </div>
    );
  }
}
function mapStateToProps(state) {
  // console.log(state);
  return state;
}
export default connect(mapStateToProps, { getRecipes, deleteRecipe, editRecipe })(RecipeList);
