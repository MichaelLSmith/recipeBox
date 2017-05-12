import _ from 'lodash';
import { stringToArray } from '../helpers/functions';

export const CREATE_RECIPE = 'create_recipe',
             GET_RECIPES = 'get_recipes',
             DELETE_RECIPE = 'delete_recipe',
             EDIT_RECIPE = 'edit_recipe'

export function createRecipe(values) {
  let { ingredients } = values;
  ingredients = stringToArray(ingredients);
  values.ingredients = ingredients;
  // console.log('value after array convert');
  // console.log(values);
  const recipe = {[values.id]:values};
  console.log('recipe', recipe);

  return {
    type: CREATE_RECIPE,
    payload: recipe
  }
}
export function deleteRecipe(id) {
  return {
    type: DELETE_RECIPE,
    payload: id
  }
}
export function editRecipe(id) {
  //here we want to return the selected recipe. It will be similar to createRecipe, but instead of creating a new one, we want to replace the existing one in state with the new one. It will have the same id
  return {
    type: EDIT_RECIPE,
    payload: id
  }
}
