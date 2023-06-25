import React, { useState, useEffect } from 'react';
// API
import { fetchMealData } from '../api/themealdb';
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
    <div className="flex justify-center flex-col m-auto gap-4">
      <MealDetails meal={mealData?.meals[0]} />
      <button
        onClick={handleRandomClick}
        className="fixed bottom-0 left-0 mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Random
      </button>
    </div>
  );
}

export default Home;
