import _ from 'lodash';

export const CREATE_RECIPE = 'create_recipe';
export const GET_RECIPIES = 'get_recipes';

export function createRecipe(values, stringToArray) {
  let {ingredients} = values;
  //ingredients is created as a string, must be an array.
  const arr = stringToArray(ingredients);
  values.ingredients = arr;

  //have to have localStorage look like:
  /*
  {data: [{obj1}, {obj2}]}
  */
  let data = localStorage.getItem('data');
  if(data == null) {
    localStorage.setItem('data', '');
  }
  console.log(data);

  // values = JSON.stringify(values);
  // localStorage.setItem('data', values);
  // let request = localStorage.getItem('data');
  // request = JSON.parse(request);
  // console.log(request);

  //in the blogApp request on making new post is the promise returned from server.
    return {
      type: CREATE_RECIPE,
      payload: values
    }
}
export function getRecipes() {
  const storage = localStorage.getItem('data');
  const request = JSON.parse(storage);
  console.log(request);
  return {
    type: GET_RECIPIES,
    payload: request
  }
}
