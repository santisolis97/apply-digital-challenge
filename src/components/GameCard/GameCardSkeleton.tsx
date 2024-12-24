import React from 'react';
import { Button } from '../Button/Button';

export const GameCardSkeleton = () => {
  return (
    <div className='rounded-2xl p-6 border-[0.5px] border-stroke-secondary'>
      <div className='flex flex-col gap-5'>
        <div className='relative w-full bg-gray-300 h-60 rounded-t-2xl overflow-hidden animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300' />
        <div className='flex flex-col gap-22'>
          <div className='flex justify-between h-14 w-full bg-slate-300 items-center animate-pulse' />
          <div className='animate-pulse bg-slate-300 h-[58px] w-full' />
        </div>
      </div>
    </div>
  );
};
