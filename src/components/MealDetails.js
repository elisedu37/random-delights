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
  return (
    <div className="h-full flex flex-col sm:flex-row gap-12">
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-1/2 transform rounded-r-full p-2 border-[solid] border-black border-t-8 border-b-8 object-cover"
      />
      <div className="flex items-center">
        <div className="px-6 py-12 h-screen overflow-y-scroll">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {meal?.strMeal}
          </h1>
          <div>{meal?.strTags}</div>
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="my-6">
              <h2 className="text-4xl font-bold mb-2">Ingredients</h2>
              {ingredients?.map((item, index) => (
                <div className="flex text-sm" key={index}>
                  <li>{item.name} - </li>
                  <span className="italic text-gray-500">{item.measure}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-2">Intructions</h2>
            <p>{meal?.strInstructions}</p>
          </div>

          <div className="aspect-w-16 aspect-h-9 mt-6">
            <h2 className="text-4xl font-bold mb-2">Links</h2>

            {meal?.strYoutube ? (
              <a href={meal?.strYoutube} className=" pointer" target="_blank">
                {meal?.strYoutube}
              </a>
            ) : (
              <p>Link not available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
