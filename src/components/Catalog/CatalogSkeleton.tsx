import React from 'react';
import { GameCardSkeleton } from '../GameCard/GameCardSkeleton';
import { FilterSkeleton } from '../Filter/FilterSkeleton';

export const CatalogSkeleton = () => {
  return (
    <div className='flex gap-12 px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile'>
      <FilterSkeleton />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 '>
        {Array(12)
          .fill('12')
          .map((game) => (
            <GameCardSkeleton key={game} />
          ))}
      </div>
    </div>
  );
};
