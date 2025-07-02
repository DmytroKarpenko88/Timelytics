import React from 'react';
import { formatClockTime, formatDuration } from '../utilites/formatTime';

const CompletedTasks = ({ tasks }) => {
  console.log(' tasks:', tasks);

  if (!tasks.length) return null;

  return (
    <div className='max-w-3xl mx-auto mt-8 space-y-4'>
      <h2 className='text-2xl font-semibold text-gray-900 border-b pb-2 mb-4'>
        Completed Tasks
      </h2>
      {tasks.map(({ name, startTime, endTime, category, duration }, idx) => (
        <div
          key={idx}
          className='border border-gray-300 rounded-xl px-5 py-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200'
        >
          <div className='flex flex-wrap items-center text-lg text-gray-500 space-x-2'>
            <div className='flex-1 items-center h-full font-semibold text-2xl text-gray-800 truncate'>
              {name}
            </div>
            <div className='flex space-x-2 min-w-[180px] justify-end'>
              <span>{category}</span>
              <span>•</span>
              <span>{formatClockTime(startTime)}</span>
              <span>•</span>
              <span>{formatClockTime(endTime)}</span>
              <span>•</span>
              <span>{formatDuration(duration)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
