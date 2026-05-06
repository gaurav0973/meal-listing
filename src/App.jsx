import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const { data } = await api.get("/meals");
      setMeals(data.data.data);
    }

    fetchMeals();
  }, []);

  if (!meals.length) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-2xl overflow-hidden shadow"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h1 className="text-2xl font-bold">
                {meal.strMeal}
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                {meal.strCategory} • {meal.strArea}
              </p>

              <p className="text-gray-600 mt-4 line-clamp-4">
                {meal.strInstructions}
              </p>

              <a
                href={meal.strYoutube}
                target="_blank"
                className="inline-block mt-4 text-orange-500 font-medium"
              >
                Watch Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}