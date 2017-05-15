import { GET_RECIPES, CREATE_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../actions/actions';

//need to get data from localStorage into here.
export default function(state = {}, action) {
  // console.log('state in reducer before switch', state);
  // console.log('action');
  // console.log(action);
  //might just need one - both retrieve all recipes from localStorage. Not sure because need two separate actions.
  switch (action.type) {
    case CREATE_RECIPE:
      // console.log('action.payload:', action.payload);
      // console.log('old state in create reducer', state);
      const combine = Object.assign({}, state, action.payload);
      console.log('combined new recipe and old state', combine);
      return combine;

    case DELETE_RECIPE:
      return _.omit(state, [action.payload]);

    case EDIT_RECIPE:
      const recipe = action.payload;
      console.log('action in Edit reducer', action);
      console.log('edited Recipe in reducer', recipe);
      const replace = Object.assign({}, state, { [recipe.id]: recipe })

      return replace;
  }
  return state;
}
