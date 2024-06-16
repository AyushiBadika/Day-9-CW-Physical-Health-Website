import { useEffect, useState } from "react";
import axios from "axios";
export default function ShowResult() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/doubtcrack/Fitness/main/db.json`
        );
        setExercises(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    console.log(exercises);
    fetchExercises();
  }, []);
  return (
    <div className="mt-28">
      <h1 className="text-3xl text-center my-12 font-bold">Showing Results</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {exercises.map((excercise) => {
          return (
            <div
              key={excercise.id}
              className="rounded-lg shadow-lg bg-white p-4"
            >
              <img src={excercise.gifUrl} alt="" />
              <div className="flex gap-2 mb-8">
                <div className="bg-green-600 rounded-3xl py-1 p-4 text-white">
                  {excercise.bodyPart}
                </div>
                <div className="bg-blue-600 rounded-3xl py-1 p-4 text-white">
                  {excercise.target}
                </div>
              </div>
              <p className="  text-center text-xl font-bold">
                {excercise.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
