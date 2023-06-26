import React, { useState, useEffect } from 'react';
// API
import { fetchMealData } from '../api/themealdb';
// Composants
import MealDetails from '../components/MealDetails';

/**
 * Page d'accueil
 * @returns {JSX}
 */
function Home() {
  // Stocke les valeurs d'une recette
  const [mealData, setMealData] = useState();

  // Permet de récupérer les datas
  const fetchData = async () => {
    const data = await fetchMealData();
    setMealData(data);
  };

  // Fonction qui se déclanche lorsque l'on clique sur le bouton "find another recipe"
  const handleRandomClick = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="h-screen relative flex justify-center flex-col m-auto gap-4 overflow-auto md:overflow-hidden"
      style={{ backgroundColor: '#efefef' }}
    >
      <MealDetails meal={mealData?.meals[0]} />
      <div className="fixed bottom-0 w-full m-auto flex justify-center">
        <button
          onClick={handleRandomClick}
          className="px-4 py-2 bg-black text-white rounded-t-lg"
        >
          Find another recipe
        </button>
      </div>
    </div>
  );
}

export default Home;
