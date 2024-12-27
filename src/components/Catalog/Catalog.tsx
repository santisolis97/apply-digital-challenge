import React, { Suspense } from 'react';
import { GameCard } from '@/components/GameCard/GameCard';
import { fetchGames } from '@/services/gameService';
import { Filter } from '../Filter/Filter';
import { LinkButton } from '../LinkButton/LinkButton';
import { FetchGamesResponse } from '@/utils/types';

type CatalogProps = {
  page: string;
  genre: string;
};

export async function Catalog({ page, genre }: CatalogProps) {
  let error: string | null = null;
  let data: FetchGamesResponse | null = null;
  let reason: string | null = null;
  try {
    data = await fetchGames(page, genre);
  } catch (err) {
    console.error('Error fetching games:', err);
    error = 'Failed to load games. Please try again later.';
    reason = err instanceof Error ? err.message : 'Unknown error';
  }

  // If there was an error, return an error UI
  if (error) {
    return (
      <div className='flex gap-3 w-fit px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile border rounded-lg py-4 border-stroke-secondary'>
        <h2>{error}</h2>
        <h2>{reason}</h2>
        <div className='mt-12'>
          <LinkButton
            href={`/`}
            passHref
            variant='primary'
            className='w-fit p-6 flex'
          >
            GO HOME
          </LinkButton>
        </div>
      </div>
    );
  }

  const games = data?.games;
  const nextPage = (parseInt(page) + 1).toString();
  if (games?.length === 0) {
    return (
      <div className='flex gap-3 w-fit px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile border rounded-lg py-4 border-stroke-secondary'>
        <h2>No data available.</h2>
        <div className='mt-12'>
          <LinkButton
            href={`/`}
            passHref
            variant='primary'
            className='w-fit p-6 flex'
          >
            GO HOME
          </LinkButton>
        </div>
      </div>
    );
  }
  return (
    <div className='flex gap-12 px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile'>
      {data && <Filter selectedGenre={genre} genres={data.availableFilters} />}

      <div className='grid grid-cols-1   lg:grid-cols-3 gap-12 '>
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      {data && data?.currentPage < data?.totalPages && (
        <div className='mt-12 mx-auto px-4 md:max-w-screen-desktop-xl max-w-screen-mobile text-center'>
          <LinkButton
            href={`/?page=${nextPage}${genre ? `&genre=${genre}` : ''}`}
            passHref
            variant='primary'
            className='w-fit p-6 flex'
          >
            SEE MORE
          </LinkButton>
        </div>
      )}
    </div>
  );
}
