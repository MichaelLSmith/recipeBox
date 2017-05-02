export const CREATE_RECIPE = 'create_recipe';
export const GET_RECIPIES = 'get_recipes';

export function createRecipe(values) {
  const stringify = JSON.stringify(values);
  const request = localStorage.setItem('data',stringify);
    return {
      type: CREATE_RECIPE,
      payload: request
    }
}
export function getRecipes() {
  const request = localStorage
}
