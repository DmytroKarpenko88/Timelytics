import { useEffect, useState } from 'react';

export const useTasks = () => {
  const [completedTasks, setCompletedTasks] = useState(() => {
    const stored = localStorage.getItem('completedTasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addCompletedTask = (task) => {
    setCompletedTasks((prev) => [...prev, task]);
  };

  const clearCompletedTask = () => {
    setCompletedTasks([]);
  };

  return { completedTasks, addCompletedTask, clearCompletedTask };
};
