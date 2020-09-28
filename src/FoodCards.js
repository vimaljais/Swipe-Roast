import React, { useState } from "react";
import "./FoodCards.scss";
import TinderCard from "react-tinder-card";

function FoodCards() {
  const [dishes, setDishes] = useState([
    {
      name: "Bakewell tart",
      url: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    },
    {
      name: "Bread and Butter Pudding",
      url: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    },
  ]);

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
            key={dishes.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, dishes.name)}
            onCardLeftScreen={() => outOfFrame(dishes.name)}
          >
            <div
              style={{ backgroundImage: `url(${dishes.url})` }}
              className="card"
            >
              <h3 style={{ textShadow: "2px 2px grey" }}>{dishes.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default FoodCards;
