import React from 'react';

function MealDetails({ meal }) {
  const ingredients = [];
  if (meal) {
    Object.entries(meal).forEach(([key, value]) => {
      if (key.startsWith('strIngredient') && value) {
        const ingredientNumber = key.slice(13);
        const measureKey = `strMeasure${ingredientNumber}`;
        const measure = meal[measureKey];

        ingredients.push({ name: value, measure });
      }
    });
  }

  const renderList = (item, index) => (
    <div className="flex text-sm" key={index}>
      <li>{item.name} - </li>
      <span className="italic text-gray-500">{item.measure}</span>
    </div>
  );

  console.log(ingredients);
  return (
    <div className="flex">
      <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      <div className="">
        <h1>{meal?.strMeal}</h1>
        <div>{meal?.strTags}</div>
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="my-6">
            <h3 className="text-4xl font-bold mb-2">Ingredients</h3>
            {ingredients?.map((item, index) => renderList(item, index))}
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-2">Intructions</h3>
          <p>{meal?.strInstructions}</p>
        </div>

        <div className="aspect-w-16 aspect-h-9 mt-6">
          <iframe
            src={meal?.youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
