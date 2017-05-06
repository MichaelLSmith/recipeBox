import { GET_RECIPES, CREATE_RECIPE } from '../actions/actions';

//need to get data from localStorage into here.
export default function(state = {}, action) {
  console.log(state);
  console.log('action');
  console.log(action);
  //might just need one - both retrieve all recipes from localStorage. Not sure because need two separate actions.
  switch (action.type) {
    case GET_RECIPES:
    if(state[0] === null){
      return action.payload
    }
    else {
      console.log('state');
      console.log(state);
      console.log('action.payload');
      console.log(action.payload);
      return Object.assign({}, state, {recipes: action.payload});

    }

    case CREATE_RECIPE:
    // if(state[0] === null){
      return { ...state, recipes: action.payload }
  }
  return state;
}
