import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Dropdown } from "./Dropdown";

const options = [
  {
    value: "dog", label: "Dog"
  },
  {
    value: "cat", label: "Cat"
  },
  {
    value: "hamster", label: "Hamster"
  },
  {
    value: "parrot", label: "Parrot"
  },
  {
    value: "spider", label: "Spider"
  },
  {
    value: "goldfsh", label: "Goldfish"
  }
];

const id = "pet-select";
const initialValue = "hamster";


function App() {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  console.log("selectedValue", selectedValue)
  return (
    <div>
      <label for={id}>Choose a pet:</label>
      <Dropdown options={options} 
        id={id} 
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      />
    </div>
  );
}

export default App;
