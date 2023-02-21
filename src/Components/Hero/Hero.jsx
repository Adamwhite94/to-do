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
  const [task, addTask] = useState({ store: [] });
  const [input, setInput] = useState("");

  const storeInput = (e) => {
    setInput(e.target.value);
  };

  const addNewItem = () => {
    addTask((currentCart) => ({
      store: [...currentCart.store, input]
    }));
    setInput("");
  };

  const deleteTodo = (index) => {
    const newList = task.store.filter(item=> item.index!== index);
    addTask(newList);
  }
  
  return (
    <HeroContainer>
      <HeroLabel htmlFor="todoinput">What do you have to do today?</HeroLabel>
      <HeroInputContainer>
        <HeroInput id="todoinput" type="input" value={input} onChange={storeInput} />
        <SubmitButton type="submit"  onClick={addNewItem}>Add Task</SubmitButton>
      </HeroInputContainer>
      <HeroElements>
        <HeroListContainer>
         
          {task.store?.map((element, index)=>{
            return(
              <div key={index}>
            <HeroListElement onClick={()=>deleteTodo(index)}>{element}</HeroListElement>
             </div>
            )
          })}
        </HeroListContainer>
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
