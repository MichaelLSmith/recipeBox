import React, { Component } from 'react';

import RecipeList from '../containers/RecipeList';
import NewRecipe from '../containers/New';

export default class App extends Component {
  render() {
    return (
    <div>
      <RecipeList />
      <NewRecipe />
    </div>
    );
  }
}
