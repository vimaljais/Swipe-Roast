import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import FoodCards from "./FoodCards";
import Categories from "./Categories";

const App = () => {
  const [choice, setChoice] = useState("dessert");

  useEffect(() => {
    console.log(choice);
  }, [choice]);

  const catfield = (selected) => {
    setChoice(selected);
  };
  return (
    <div>
      <Header />
      <Categories catfield={catfield} />
      <FoodCards category={choice} />
    </div>
  );
};

export default App;
