const loading = (state = false, action) => {
  switch (action.type) {
    case 'GET_RECIPES':
      return true
    case 'GET_RECIPES_DATA_RECEIVED':
      return false
    case: 'GET_RECIPES_DATA_ERROR':
      return false
    default:
        return state
  }
}

export default loading;
