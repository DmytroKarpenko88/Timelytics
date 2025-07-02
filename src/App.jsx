import React, { useState } from 'react';
import MainLayout from './layouts/MAinLayout';
import TaskForm from './components/TaskForm';
import ActiveTask from './components/ActiveTask';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [activeTask, setActiveTask] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskStart = (task) => {
    setActiveTask(task);
  };

  const handleTaskStop = () => {
    if (!activeTask) return;

    const finishedAt = Date.now();
    const durationSec = Math.floor((finishedAt - activeTask.startTime) / 1000);

    const completedTask = {
      ...activeTask,
      endTime: finishedAt,
      duration: durationSec,
    };

    setCompletedTasks((prev) => [completedTask, ...prev]);
    setActiveTask(null);
  };

  return (
    <MainLayout>
      <TaskForm onTaskStart={handleTaskStart} />

      {activeTask && (
        <div>
          <ActiveTask task={activeTask} />
          <div className='max-w-md mx-auto mt-4 text-center'>
            <button
              onClick={handleTaskStop}
              className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition'
            >
              Stop Task
            </button>
          </div>
        </div>
      )}

      <CompletedTasks tasks={completedTasks} />
    </MainLayout>
  );
}

export default App;
