export const CREATE_RECIPE = 'create_recipe';

export function createRecipe(values, callback) {
  const request =
    localStorage.setItem(values);
    return {
      type: CREATE_RECIPE,
      payload: request
    }
}
