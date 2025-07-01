import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <header className='bg-white shadow p-4'>
        <h1 className='text-2xl font-bold text-gray-800'>Timelytics</h1>
      </header>

      <main className='flex-1 p-4'>{children}</main>

      <footer className='bg-white text-center p-4 text-sm text-gray-500 border-t'>
        © 2025 Timelytics
      </footer>
    </div>
  );
};

export default MainLayout;
