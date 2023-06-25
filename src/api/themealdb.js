export const fetchMealData = () => {
  return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
