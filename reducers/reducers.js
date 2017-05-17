import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import RecipeReducer from './reducer_recipes';

//combineReducers tells Redux how create our app state
const rootReducer = combineReducers({
  form: formReducer,
  recipes: RecipeReducer
});

export default rootReducer;
