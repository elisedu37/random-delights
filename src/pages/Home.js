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
    <div className="flex w-3/5 justify-center flex-col m-auto gap-4">
      <MealDetails meal={mealData?.meals[0]} />
      <button onClick={handleRandomClick}>Random</button>
    </div>
  );
}

export default Home;
