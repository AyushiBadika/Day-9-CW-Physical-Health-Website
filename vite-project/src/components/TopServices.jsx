import header from "../assets/header.svg";
import TypeOfWorkout from "./TypeOfWorkout";
export default function TopServices() {
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
      <div className="relative">
        <input
          type="text"
          placeholder="Search Exercise"
          className="border-2 px-12 py-6 rounded-3xl w-3/4"
        />
        <button
          className="mt-8 border-2 px-8 py-6 rounded-3xl bg-blue-600 text-white font-bold absolute bottom-0 "
          style={{ left: "81%" }}
        >
          Search
        </button>
      </div>
      <TypeOfWorkout />
    </div>
  );
}
