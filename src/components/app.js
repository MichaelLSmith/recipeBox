import React, { Component } from 'react';

import RecipeList from '../containers/RecipeList';
import NewRecipe from '../containers/New';

export default function() {
    return (
    <div>
      <RecipeList />
      <NewRecipe />
    </div>
    );
}
