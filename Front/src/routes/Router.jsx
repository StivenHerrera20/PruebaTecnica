import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SerchAnimals from "../components/SerchAnimals"
import Results from "../components/Results"


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SerchAnimals />}></Route>
            <Route path="/resultados" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;