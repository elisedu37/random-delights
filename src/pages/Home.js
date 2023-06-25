import React, { useState, useEffect } from 'react';
// API
import { fetchMealData } from '../api/themealdb';
// Composants
import MealDetails from '../components/MealDetails';

function Home() {
  const [mealData, setMealData] = useState();

  const fetchData = async () => {
    const data = await fetchMealData();
    setMealData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRandomClick = () => {
    fetchData();
  };

  return (
    <div className="h-screen relative flex justify-center flex-col m-auto gap-4 overflow-hidden ">
      <MealDetails meal={mealData?.meals[0]} />
      <div className="absolute fixed bottom-0 w-full m-auto flex justify-center">
        <button
          onClick={handleRandomClick}
          className="px-4 py-2 bg-black text-white rounded-t-lg"
        >
          Random other meal
        </button>
      </div>
    </div>
  );
}

export default Home;
