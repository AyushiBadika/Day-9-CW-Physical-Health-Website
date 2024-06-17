import { useContext } from "react";
import { context } from "./Context";
export default function ShowResult() {
  const { filteredExercises } = useContext(context);
  return (
    <div className="mt-28">
      <h1 className="text-3xl text-center my-12 font-bold">Showing Results</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {filteredExercises.map((excercise) => {
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
