import React, { Suspense } from 'react';
import { GameCard } from '@/components/GameCard/GameCard';
import { fetchGames } from '@/services/gameService';
import { Filter } from '../Filter/Filter';
import { LinkButton } from '../LinkButton/LinkButton';

type CatalogProps = {
  page: string;
  genre: string;
};

export async function Catalog({ page, genre }: CatalogProps) {
  const data = await fetchGames(page, genre);
  const games = data.games;
  const nextPage = (parseInt(page) + 1).toString();
  return (
    <div className='flex gap-12 px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile'>
      <Filter selectedGenre={genre} genres={data.availableFilters} />
      <Suspense key={`${page}-${genre}`} fallback={<div>LOADING!!!!!</div>}>
        <div className='grid grid-cols-1   lg:grid-cols-3 gap-12 '>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {data.currentPage < data.totalPages && (
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
      </Suspense>
    </div>
  );
}
