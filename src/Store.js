import { create } from 'zustand'

const taskStore = create((set) => ({
  tasks: [],
  addTask: (id, text) =>
      set((state) => ({
          tasks: [
              ...state.tasks,
              {
                  id,
                  text,
                  completed: false,
              },
          ],
      })),
  toggleTask: (id) =>
      set((state) => ({
          tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, completed: !task.completed } : task
          ),
      })),
  deleteTask: (id) =>
      set((state) => ({
          todos: state.tasks.filter((task) => task.id !== id),
      })),
}));

export default taskStore