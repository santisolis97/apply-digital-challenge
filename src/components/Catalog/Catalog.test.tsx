import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Catalog } from './Catalog';
import { fetchGames } from '@/services/gameService';
import '@testing-library/jest-dom';

jest.mock('@/services/gameService', () => ({
  fetchGames: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

const mockData = {
  games: [
    {
      id: '1',
      name: 'Game 1',
      genre: 'Action',
      description: 'An exciting action game.',
      price: 59.99,
      isNew: false,
      image: '/game1.jpg',
    },
    {
      id: '2',
      name: 'Game 2',
      genre: 'RPG',
      description: 'An immersive RPG experience.',
      price: 49.99,
      isNew: true,
      image: '/game2.jpg',
    },
  ],
  availableFilters: ['Action', 'RPG'],
  currentPage: 1,
  totalPages: 2,
};

const emptyMockData = {
  games: [],
  availableFilters: [],
  currentPage: 1,
  totalPages: 1,
};
describe('Catalog Component', () => {
  const mockFetchGames = fetchGames as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the games and "See More" button when there are games', async () => {
    mockFetchGames.mockResolvedValue(mockData);
    const RenderCatalog = await Catalog({ page: '1', genre: 'Action' });
    render(RenderCatalog);

    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /SEE MORE/i })).toBeInTheDocument();
  });

  it('does not render "See More" button when on the last page', async () => {
    const notSeeMoreData = {
      ...mockData,
      currentPage: mockData.totalPages,
    };
    mockFetchGames.mockResolvedValue(notSeeMoreData);
    const RenderCatalog = await Catalog({ page: '1', genre: 'Action' });
    render(RenderCatalog);

    expect(screen.getByText('Game 1')).toBeInTheDocument();

    expect(
      screen.queryByRole('link', { name: /SEE MORE/i })
    ).not.toBeInTheDocument();
  });

  it('displays an error handling UI when there is an error', async () => {
    mockFetchGames.mockRejectedValue(new Error('Failed to fetch games'));
    const RenderCatalog = await Catalog({ page: '1', genre: 'FakeGenre' });
    render(RenderCatalog);

    expect(screen.getByText(/Error/i)).toBeInTheDocument();
    expect(screen.getByText(/Reason/i)).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /GO HOME/i })
    ).toBeInTheDocument();
  });
  it('displays a message when no games found', async () => {
    mockFetchGames.mockResolvedValue(emptyMockData);
    const RenderCatalog = await Catalog({ page: '1', genre: 'Action' });
    render(RenderCatalog);

    expect(screen.getByText('No data available.')).toBeInTheDocument();

    expect(
      screen.queryByRole('link', { name: /GO HOME/i })
    ).toBeInTheDocument();
  });
});
