import { GET_RECIPES, CREATE_RECIPE } from '../actions/actions';

//need to get data from localStorage into here.
export default function(state = {recipes: {}}, action) {
  console.log(state);
  console.log('action');
  console.log(action);
  //might just need one - both retrieve all recipes from localStorage. Not sure because need two separate actions.
  switch (action.type) {
    case GET_RECIPES:
      console.log('state');
      console.log(state);
      console.log('action.payload');
      console.log(action.payload);
      const combine = Object.assign(state, action.payload);
      console.log(combine);
      return combine;

    case CREATE_RECIPE:
      return Object.assign(state, action.payload);
  }
  return state;
}
