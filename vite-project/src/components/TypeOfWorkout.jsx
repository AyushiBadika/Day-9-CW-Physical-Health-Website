import gym from "../assets/gym.webp";
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

  return (
    <div className="pb-8 p-24 mb-12  flex gap-16 overflow-x-scroll overflow-y-hidden justify-center customScroller">
      {typeOfWorkout.map((workout, index) => {
        return (
          <div
            key={index}
            className="bg-white shadow-lg p-8 cursor-pointer"
            style={{ minWidth: "200px" }}
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
