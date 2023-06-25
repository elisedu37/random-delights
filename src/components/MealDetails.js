import React from 'react';

function MealDetails({ meal }) {
  return (
    <div>
      <h2>{meal?.strMeal}</h2>
      <p>{meal?.strInstructions}</p>
      <img src={meal?.strMealThumb} alt={meal?.strMeal} />
    </div>
  );
}

export default MealDetails;
