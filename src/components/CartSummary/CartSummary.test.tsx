import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartSummary } from './CartSummary';
import { Game } from '@/utils/endpoint';
const mockGames: Game[] = [
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

describe('CartSummary', () => {
  it('renders the order summary correctly', () => {
    render(<CartSummary games={mockGames} />);

    expect(screen.getByText('Order Summary')).toBeInTheDocument();

    expect(screen.getByText(`${mockGames.length} items`)).toBeInTheDocument();

    mockGames.forEach((game) => {
      expect(screen.getByText(game.name)).toBeInTheDocument();
      expect(screen.getByText(`$${game.price}`)).toBeInTheDocument();
    });

    const total = mockGames
      .reduce((acc, game) => acc + game.price, 0)
      .toFixed(2);
    expect(screen.getByText(`$${total}`)).toBeInTheDocument();
  });

  it('renders "Checkout" button and responds to click', async () => {
    const handleClick = jest.fn();
    render(<CartSummary games={mockGames} />);

    const button = screen.getByRole('button', { name: /checkout/i });

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('displays "0 items" and "$0" if no games are provided', () => {
    render(<CartSummary games={[]} />);

    expect(screen.getByText('0 items')).toBeInTheDocument();
    expect(screen.getByText('$0')).toBeInTheDocument();
  });
});
