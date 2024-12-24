import React from 'react';

export const FilterSkeleton = () => {
  return (
    <div className='flex gap-6 w-full justify-end items-center'>
      <h3 className='text-xl text-bold text-cta-content-secondary'>Genre</h3>
      <div className='w-0.5 h-6 bg-stroke-secondary' />

      <div className='h-6 w-40 bg-slate-300 items-center animate-pulse' />
    </div>
  );
};
