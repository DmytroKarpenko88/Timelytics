import React from 'react';
import { formatTime } from '../utilites/formatTime';

const CompletedTasks = ({ tasks }) => {
  if (!tasks.length) return null;

  return (
    <div className='max-w-md mx-auto mt-8 space-y-8'>
      <h2 className='text-lg font-bold text-gray-800'>Completed Tasks</h2>
      {tasks.map((task, idx) => (
        <div
          key={idx}
          className='border border-gray-200 rounded-lg px-4 py-2 bg-white shadow'
        >
          <div className='font-semibold'>{task.name}</div>
          <div className='text-sm text-gray-600'>
            {task.category}•{formatTime(task.duration)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
