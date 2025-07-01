import React, { useState } from 'react';

const TaskForm = ({ onTaskStart }) => {
  const [taskName, setTaskName] = useState('');
  const [category, setCategory] = useState('Focus');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;

    const newTask = {
      name: taskName,
      category,
      startTime: Date.now(),
    };

    onTaskStart?.(newTask);
    setTaskName('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white p-4 rounded-xl shadow-md max-w-md mx-auto space-y-4'
    >
      <div>
        <label className='block text-sm font-medium to-gray-700 mb-1'>
          Task name
        </label>
        <input
          type='text'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300'
          placeholder='Write English words, Prictice typing...'
        />
      </div>

      <div>
        <label className='block text-sm font-medium to-gray-700 mb-1'>
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='w-full border border-gray-300 rounded-lg px-3 py-2'
        >
          <option value='Focus'>🧠 Focus</option>
          <option value='English'>🇬🇧 English</option>
          <option value='Typing'>⌨️ Typing</option>
          <option value='SocialMedia'>📱 Social Media</option>
          <option value='Break'>☕ Break</option>
        </select>
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer'
      >
        Start Task
      </button>
    </form>
  );
};

export default TaskForm;
