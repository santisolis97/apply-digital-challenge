import { allGames, availableFilters, delay } from '@/utils/endpoint';
import { ITEMS_PER_PAGE } from './utils';

// Adding this export to make it available to the test.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const genre = searchParams.get('genre');

  if (
    genre &&
    !availableFilters.map((g) => g.toLowerCase()).includes(genre.toLowerCase())
  ) {
    return new Response('No such genre', { status: 500 });
  }

  let page = parseInt(searchParams.get('page') ?? '1');

  let games = allGames;

  if (genre) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (page < 1 || isNaN(page)) page = 1;

  // Mock a delay to simulate a real API
  await delay(2000);

  // CHANGE BY SANTI SOLIS: changed totalPage calculation to get the total number of results and not allGames
  const totalResults = games.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  games = games.slice(fromIndex, toIndex);

  const currentPage = page;

  return Response.json({ games, availableFilters, totalPages, currentPage });
}
