import React, { useState } from 'react';
import MainLayout from './layouts/MAinLayout';
import TaskForm from './components/TaskForm';
import ActiveTask from './components/ActiveTask';

function App() {
  const [activeTask, setActiveTask] = useState(null);

  const handleTaskStart = (task) => {
    setActiveTask(task);
  };

  return (
    <MainLayout>
      <TaskForm onTaskStart={handleTaskStart} />
      {activeTask && <ActiveTask task={activeTask} />}
    </MainLayout>
  );
}

export default App;
