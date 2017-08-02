import request from 'superagent';
const API_BASE_URL = 'http://michaelsmith.x10host.com/wp/';
const WP_API_URL = 'wp-json/wp/v2/';
const RECIPES_END = 'recipes?_embed';


const dataService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
    case 'GET_RECIPES':
      // console.log(`API endpoint: ${API_BASE_URL}${WP_API_URL}${RECIPES_END}`)
      //In case we recieve an action to send an API request, sent the appropiate request
      request
        .get(`${API_BASE_URL}${WP_API_URL}${RECIPES_END}`)
        .end((err, res) => {
          if(err) {
            //in case of error, dispatch an action containing the error
          return next({
            type: 'GET_RECIPES_DATA_ERROR',
            err
          })
          }
        const data = JSON.parse(res.text);
        console.log(`data: `,data);
        //Once data is recieved, dispatch an action telling the application that data was recieved sucessfully, along with the parsed data
          next({
            type: 'GET_RECIPES_DATA_RECEIVED',
            data
          })
        })
      break;
      //Do nothing if the action does not interest us
    default:
      break
  }
};

export default dataService;
