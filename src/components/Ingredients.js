import React from 'react';

function Ingredients(props) {
  console.log(props);
  if(props.ingredients == undefined){
    return <div>Ingredients here</div>
  }
  const ingredientsList = props.ingredients.map(
    (ingredient, key) => {
    return (
      <li key={key}>{ingredient}</li>
    )}
  )
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>{ingredientsList}</ul>
    </div>
  )
}
export default Ingredients;
