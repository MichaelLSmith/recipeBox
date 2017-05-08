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
export function editRecipe(values) {
  let { ingredients } = values;
  ingredients = stringToArray(ingredients);
  values.ingredients = ingredients;
  return {
    type: EDIT_RECIPE,
    payload: values
  }
}
