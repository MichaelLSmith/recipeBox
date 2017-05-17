import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

function Ingredients(props) {
  // console.log(props);
  if(props.ingredients == undefined){
    return <div>Ingredients here</div>
  }
  const ingredientsList = props.ingredients.map(
    (ingredient, key) => {
    return (
      <ListGroupItem key={key}>{ingredient}</ListGroupItem>
    )}
  )
  return (
    <ListGroup>
      <h3 className="text-center">Ingredients</h3>
      <hr/>
      {ingredientsList}
    </ListGroup>
  );
}
export default Ingredients;
