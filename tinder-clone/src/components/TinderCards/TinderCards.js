import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
// import axios from "./axios";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Elon_Musk_%283017880307%29.jpg",
    },
    {
      name: "Jeff Bezos",
      imgUrl:
        "data:image/jpeg;base64,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",
    },
  ]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("/tinder/cards");

  //     setPeople(req.data);
  //   }
  //   fetchData();
  // }, []);

  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
