import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FitnessHomePage from "./components/FitnessHomePage";
import AboutUsPage from "./components/AboutUsPage";
import TopServices from "./components/TopServices";
import ShowResult from "./components/ShowResult";

const App = () => {
  return (
    <>
      <FitnessHomePage />
      <AboutUsPage />
      <TopServices />
      <ShowResult />
    </>
  );
};

export default App;
