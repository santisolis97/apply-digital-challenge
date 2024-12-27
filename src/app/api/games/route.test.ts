/**
 * @jest-environment node
 */
import { allGames } from '@/utils/endpoint';
import { GET } from './route';
import { ITEMS_PER_PAGE } from './utils';

describe('API Route test', () => {
  it('should return data with status 200', async () => {
    const req = new Request('http://localhost:3000/api/games');
    const response = await GET(req);
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.games).toEqual(allGames.slice(0, ITEMS_PER_PAGE));
  });
  it('should filter by genre', async () => {
    const req = new Request('http://localhost:3000/api/games?genre=action');
    const response = await GET(req);
    const body = await response.json();
    if (response.status === 200) {
      expect(body.games).toEqual(
        allGames.filter((game) => game.genre === 'Action')
      );
    } else {
      expect(response.status).toBe(400);
      expect(body.error).toBe('No such genre');
    }
  });

  it('should have pagination', async () => {
    const reqFirstPage = new Request('http://localhost:3000/api/games?page=1');
    const responseFirstPage = await GET(reqFirstPage);
    const bodyFirstPage = await responseFirstPage.json();
    const reqSecondPage = new Request('http://localhost:3000/api/games?page=2');
    const responseSecondPage = await GET(reqSecondPage);
    const bodySecondPage = await responseSecondPage.json();

    expect(responseFirstPage.status).toBe(200);
    expect(responseSecondPage.status).toBe(200);
    expect(bodyFirstPage.games).toEqual(allGames.slice(0, ITEMS_PER_PAGE));
    expect(bodySecondPage.games).toEqual(
      allGames.slice(ITEMS_PER_PAGE, ITEMS_PER_PAGE * 2)
    );
    expect(bodyFirstPage.currentPage).toBe(1);
    expect(bodySecondPage.currentPage).toBe(2);
    expect(bodyFirstPage).not.toEqual(bodySecondPage);
  });
});
