import { render, screen, fireEvent } from '@testing-library/react';
import { GameCard } from './GameCard';
import { useCartStore } from '@/services/store';
import { allGames } from '@/utils/endpoint';
jest.mock('@/services/store', () => ({
  useCartStore: jest.fn(),
}));
describe('GameCard Component', () => {
  const mockAddGame = jest.fn();
  const mockRemoveGame = jest.fn();
  beforeEach(() => {
    useCartStore.mockReturnValue({
      cartGames: [],
      addGame: mockAddGame,
      removeGame: mockRemoveGame,
    });
  });
  it('renders correctly with game data', () => {
    const game = allGames[0];
    render(<GameCard game={game} />);
    expect(screen.getByText(allGames[0].name)).toBeInTheDocument();
    expect(
      screen.getByText(allGames[0].genre.toUpperCase())
    ).toBeInTheDocument();
    expect(screen.getByText(`$${allGames[0].price}`)).toBeInTheDocument();
  });
  it('adds game to cart when the button is clicked', () => {
    const game = allGames[0];
    useCartStore.mockReturnValue({
      cartGames: [],
      addGame: mockAddGame,
      removeGame: mockRemoveGame,
    });
    render(<GameCard game={game} />);
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    expect(mockAddGame).toHaveBeenCalledWith(game);
  });
  it('removes game from cart when the button is clicked', () => {
    const game = allGames[0];
    useCartStore.mockReturnValue({
      cartGames: [game],
      addGame: mockAddGame,
      removeGame: mockRemoveGame,
    });
    render(<GameCard game={game} />);
    const removeButton = screen.getByRole('button', {
      name: /remove from cart/i,
    });
    fireEvent.click(removeButton);
    expect(mockRemoveGame).toHaveBeenCalledWith(game.id);
  });
  it('displays correct button text when game is in cart', () => {
    const game = allGames[0];
    useCartStore.mockReturnValue({
      cartGames: [game],
      addGame: mockAddGame,
      removeGame: mockRemoveGame,
    });
    render(<GameCard game={game} />);
    const button = screen.getByRole('button', { name: /remove from cart/i });
    expect(button).toBeInTheDocument();
  });
  it('displays correct button text when game is not in cart', () => {
    const game = allGames[0];
    useCartStore.mockReturnValue({
      cartGames: [],
      addGame: mockAddGame,
      removeGame: mockRemoveGame,
    });
    render(<GameCard game={game} />);
    const button = screen.getByRole('button', { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });
});
