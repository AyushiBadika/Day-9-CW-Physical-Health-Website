import { useContext } from "react";
import gym from "../assets/gym.webp";
import { context } from "./Context";
export default function TypeOfWorkout() {
  const typeOfWorkout = [
    "All",
    "Waist",
    "Back",
    "Chest",
    "Upper Legs",
    "Upper Arms",
    "Shoulders",
    "Lower Arms",
    "Lower Legs",
    "Cardio",
    "Neck",
  ];
  const { exercises, setFilteredExercises } = useContext(context);

  const handleFilterExcercises = (workout) => {
    if (workout === "All") setFilteredExercises(exercises);
    else {
      setFilteredExercises(
        exercises.filter((ex) => ex.bodyPart === workout.toLowerCase())
      );
    }
  };

  return (
    <div className="flex gap-8 overflow-x-scroll p-8 m-8 customScroller">
      {typeOfWorkout.map((workout, index) => {
        return (
          <div
            key={index}
            className="bg-white shadow-lg p-8 cursor-pointer"
            style={{ minWidth: "200px" }}
            onClick={() => handleFilterExcercises(workout)}
          >
            <img
              src={gym}
              alt=""
              className="mb-8"
              style={{ minWidth: "100px" }}
            />
            <p>{workout}</p>
          </div>
        );
      })}
    </div>
  );
}
