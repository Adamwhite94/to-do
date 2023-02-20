import React, {useState} from "react";

import {
  HeroContainer,
  HeroElements,
  HeroInput,
  HeroListContainer,
  HeroListElement,
  HeroLabel,
  SubmitButton,
  HeroInputContainer,
} from "./HeroStyles";
import { Tasks } from "./Tasks";


function Hero() {
  const [task, addTask] = useState({ cart: [] });
  const [inputValue, setInputValue] = useState("");

  const saveInput = (e) => {
    setInputValue(e.target.value);
  };

  const addNewItem = () => {
    addTask((existingCartList) => ({
      cart: [...existingCartList.cart, inputValue]
    }));
    setInputValue("");
  };
  
  return (
    <HeroContainer>
      <HeroLabel htmlFor="todoinput">What do you have to do today?</HeroLabel>
      <HeroInputContainer>
        <HeroInput id="todoinput" type="input" value={inputValue} onChange={saveInput} />
        <SubmitButton type="submit"  onClick={addNewItem}>Add Task</SubmitButton>
      </HeroInputContainer>
      <HeroElements>
        <HeroListContainer>
         
          {task.cart.map((element, index)=>{
            return(
              <div key={index}>
             <HeroListElement>{element}</HeroListElement>
             </div>
            )
          })}
        </HeroListContainer>
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
