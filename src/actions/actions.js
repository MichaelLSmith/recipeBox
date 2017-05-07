import _ from 'lodash';
import { stringToArray } from '../helpers/functions';

export const CREATE_RECIPE = 'create_recipe';
export const GET_RECIPES = 'get_recipes';

export function createRecipe(values, stringToArray) {
  console.log(values);
  let { ingredients } = values;
  ingredients = stringToArray(ingredients);
  values.ingredients = ingredients;
  console.log('value after array convert');
  console.log(values)

  return {
    type: CREATE_RECIPE,
    payload: values
  }
}
export function getRecipes() {
  let request = localStorage.getItem('data');
  console.log(request);
  request = JSON.parse(request);
  console.log('request from localStorage parsed');
  console.log(request);
  return {
    type: GET_RECIPES,
    payload: request
  }
}
