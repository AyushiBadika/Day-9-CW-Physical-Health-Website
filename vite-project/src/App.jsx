import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FitnessHomePage from "./components/FitnessHomePage";
import AboutUsPage from "./components/AboutUsPage";
import TopServices from "./components/TopServices";
import ShowResult from "./components/ShowResult";
import { context } from "./components/Context";

const App = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/doubtcrack/Fitness/main/db.json`
        );
        setExercises(response.data);
        setFilteredExercises(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchExercises();
  }, []);

  return (
    <context.Provider
      value={{ exercises, filteredExercises, setFilteredExercises }}
    >
      <FitnessHomePage />
      <AboutUsPage />
      <TopServices />
      <ShowResult />
    </context.Provider>
  );
};

export default App;
