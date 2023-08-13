import React, { useState } from "react";

import {
  HeroContainer,
  HeroElements,
  HeroInput,
  HeroListContainer,
  HeroListElement,
  HeroLabel,
  SubmitButton,
  HeroInputContainer,
  TitleHeading,
} from "./HeroStyles";
import taskStore from "../../Store";

function Hero() {
  const addTask = taskStore((state) => state.addTask);
  const [task, setTask] = useState("");

  const { tasks, deleteTask, toggleTask } = taskStore((state) => {
    return {
      tasks: state.tasks,
      deleteTask: state.deleteTask,
      toggleTask: state.toggleTask,
    };
  });
  const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
  const submitHandler = (e) => {
    e.preventDefault();
    addTask(uniqueId, task);
    setTask("");
  };


  return (
    <HeroContainer>
      <TitleHeading>Now Or Never</TitleHeading>
      <HeroLabel htmlFor="todoinput">What do you have to do today?</HeroLabel>
      <HeroInputContainer onSubmit={submitHandler}>
        <HeroInput
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <SubmitButton type="submit">Add Task</SubmitButton>
      </HeroInputContainer>
      <HeroElements>
        <HeroListContainer>
          {tasks.map((task) => {
            return (
              <div key={task.id}>
                <HeroListElement
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </HeroListElement>
              </div>
            );
          })}
        </HeroListContainer>
      </HeroElements>
    </HeroContainer>
  );
}

export default Hero;
