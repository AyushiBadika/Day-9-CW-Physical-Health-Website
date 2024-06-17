import header from "../assets/header.svg";
import TypeOfWorkout from "./TypeOfWorkout";
import { context } from "./Context";
import { useContext, useState } from "react";
export default function TopServices() {
  const [value, setValue] = useState("");
  const { exercises, setFilteredExercises } = useContext(context);

  const handleExercises = (input) => {
    setFilteredExercises(
      exercises.filter(
        (excercise) =>
          excercise.bodyPart.includes(input) ||
          excercise.name.includes(input) ||
          excercise.target.includes(input)
      )
    );
  };

  return (
    <div className="text-center">
      <div className="relative mb-40">
        <h1 className="text-4xl font-bold">Top Services</h1>
        <img
          src={header}
          alt=""
          className="absolute scale-50"
          style={{ right: "41%" }}
        />
      </div>
      <h2 className="text-5xl font-bold mb-10 ">
        Let Us Find The Perfect Workout For You!
      </h2>
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Search Exercise"
          className="border-2 px-12 py-4 rounded-3xl w-3/4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="mt-8 border-2 px-8 py-4 rounded-3xl bg-blue-600 text-white font-bold absolute bottom-0 "
          style={{ left: "81%" }}
          onClick={() => handleExercises(value)}
        >
          Search
        </button>
      </div>
      <TypeOfWorkout />
    </div>
  );
}
