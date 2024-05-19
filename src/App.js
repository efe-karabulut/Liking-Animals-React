import { useState } from "react";
import AnimalShow from "./AnimalShow"
import "./App.css"

const getRandomAnimal = () => {
  const animals = ["bird", "dog", "cow", "cat", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button> <br></br>
      <div className="animals-list" >{renderedAnimals}</div>
    </div>
  );
}

export default App;
