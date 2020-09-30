import React, { useState, useEffect } from "react";
import "./FoodCards.scss";
import TinderCard from "react-tinder-card";

const FoodCards = ({ category }) => {
  const [dishes, setDishes] = useState([
    {
      strMeal: "Bakewell tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    },
    {
      strMeal: "Bread and Butter Pudding",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:3001/bycategory?q=${category}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.meals);
        if (response.meals !== null) {
          setDishes(response.meals);
        }
      });
    console.log("card wala " + category);
  }, [category]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <div className="foodCards">
      <div className="tinderCards_cardContainer">
        {dishes.map((dishes) => (
          <TinderCard
            className="swipe"
            key={dishes.strMeal}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, dishes.strMeal)}
            onCardLeftScreen={() => outOfFrame(dishes.strMeal)}
          >
            <div
              style={{ backgroundImage: `url(${dishes.strMealThumb})` }}
              className="card"
            >
              <h3 style={{ textShadow: "2px 2px grey" }}>{dishes.strMeal}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
