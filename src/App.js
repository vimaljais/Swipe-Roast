import React from "react";
import "./App.css";
import Header from "./Header";
import FoodCards from "./FoodCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div>
      <Header />
      <FoodCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
