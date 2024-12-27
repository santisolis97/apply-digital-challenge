import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardGameList } from './CardGameList';
import { Game } from '@/utils/endpoint';
const mockCartGames: Game[] = [
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
];

const mockRemoveGame = jest.fn();

describe('CardGameList', () => {
  it('renders the list of CartGameCard components', () => {
    render(
      <CardGameList cartGames={mockCartGames} removeGame={mockRemoveGame} />
    );

    mockCartGames.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
      expect(screen.getByText(game.genre.toUpperCase())).toBeInTheDocument();
      expect(screen.getByText(game.description)).toBeInTheDocument();
      expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
    });
  });

  it('calls removeGame when the remove button is clicked', async () => {
    render(
      <CardGameList cartGames={mockCartGames} removeGame={mockRemoveGame} />
    );

    const removeButtons = screen.getAllByRole('button');
    await userEvent.click(removeButtons[0]);

    expect(mockRemoveGame).toHaveBeenCalledTimes(1);
    expect(mockRemoveGame).toHaveBeenCalledWith(mockCartGames[0].id);
  });
});
