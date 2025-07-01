import React, { useEffect, useState } from 'react';
import { formatTime } from '../utilites/formatTime';

const ActiveTask = ({ task }) => {
  const [elapsed, setElapsed] = useState(() =>
    Math.floor((Date.now() - task.startTime) / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - task.startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [task.startTime]);

  return (
    <div className='bg-blue-100 border border-blue-300 rounded-xl p-4 mt-6 max-w-md mx-auto text-center shadow'>
      <div className='text-sm to-gray-600'>Current task:</div>
      <h2 className='text-xl font-semibold text-blue-800'>{task.name}</h2>
      <p className='text-sm text-gray-500 mb-2'>{task.category}</p>
      <div className='text-3xl font-mono text-blue-900'>
        {formatTime(elapsed)}
      </div>
    </div>
  );
};

export default ActiveTask;
