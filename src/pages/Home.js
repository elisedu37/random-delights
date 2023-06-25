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
    <div className="h-screen relative flex justify-center flex-col m-auto gap-4">
      <MealDetails meal={mealData?.meals[0]} />
      <button
        onClick={handleRandomClick}
        className="absolute fixed bottom-0  px-4 py-2 rounded-full m-auto"
      >
        Random other meal
      </button>
    </div>
  );
}

export default Home;
