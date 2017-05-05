import _ from 'lodash';

export const CREATE_RECIPE = 'create_recipe';
export const GET_RECIPES = 'get_recipes';

export function createRecipe(values, stringToArray) {
  let {ingredients} = values;
  const arr = stringToArray(ingredients);
  values.ingredients = arr;

  let data = localStorage.getItem('data');
  console.log(data);

  if(data == null) {
    localStorage.setItem('data', '[]');
    data = localStorage.getItem('data');
  }
  data = JSON.parse(data);
  console.log(data);
  data.push(values);

  data = JSON.stringify(data);
  console.log('stringify');
  console.log(data);
  localStorage.setItem('data', data);

  let request = localStorage.getItem('data');
  request = JSON.parse(request);
  console.log(request);

    return {
      type: CREATE_RECIPE,
      payload: request
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
