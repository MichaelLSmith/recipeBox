import React, { Component } from 'react';

function Recipe(props) {
  console.log(props.recipes);

  const RecipeItems = props.recipes.map( recipe =>

  );

  // const recipesList = props.recipes.map(
  //   recipe => { return console.log(recipe); }
}


export default Recipe;
