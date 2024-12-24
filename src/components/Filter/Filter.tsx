'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

type FilterProps = {
  genres: string[];
  selectedGenre: string;
};

export const Filter = ({ genres, selectedGenre }: FilterProps) => {
  const router = useRouter();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.push(`/?genre=${e.target.value}&page=1`);
    if (e.target.value === '') {
      router.push('/');
    }
  };
  return (
    <div className='flex gap-6 w-full justify-end items-center'>
      <h3 className='text-xl text-bold text-cta-content-secondary'>Genre</h3>
      <div className='w-0.5 h-6 bg-stroke-secondary' />

      <select className='w-40' value={selectedGenre} onChange={handleSelect}>
        <option value=''>All</option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};
