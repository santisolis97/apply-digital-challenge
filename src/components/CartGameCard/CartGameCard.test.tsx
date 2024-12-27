import { render, screen, fireEvent } from '@testing-library/react';
import { CartGameCard } from './CartGameCard';
import { Game } from '@/utils/endpoint';
describe('CartGameCard', () => {
  const mockGame: Game = {
    id: '1',
    name: 'Test Game',
    genre: 'Adventure',
    description: 'Test game description',
    isNew: true,
    price: 59.99,
    image: '/test-image.jpg',
  };

  const mockHandleRemoveGame = jest.fn();

  it('renders the game details correctly', () => {
    render(
      <CartGameCard
        game={mockGame}
        hasBorder={true}
        handleRemoveGame={mockHandleRemoveGame}
      />
    );

    expect(screen.getByText(mockGame.name)).toBeInTheDocument();
    expect(screen.getByText(mockGame.genre.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(mockGame.description)).toBeInTheDocument();

    expect(screen.getByText(`$${mockGame.price}`)).toBeInTheDocument();

    const image = screen.getByAltText(mockGame.name) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(encodeURIComponent(mockGame.image));
  });

  it('triggers handleRemoveGame on remove button click', () => {
    render(
      <CartGameCard
        game={mockGame}
        hasBorder={false}
        handleRemoveGame={mockHandleRemoveGame}
      />
    );

    const removeButton = screen.getAllByRole('button')[0];
    fireEvent.click(removeButton);

    expect(mockHandleRemoveGame).toHaveBeenCalledWith(mockGame.id);
    expect(mockHandleRemoveGame).toHaveBeenCalledTimes(1);
  });

  it('applies the border styling when hasBorder is true', () => {
    const { container } = render(
      <CartGameCard
        game={mockGame}
        hasBorder={true}
        handleRemoveGame={mockHandleRemoveGame}
      />
    );

    expect(container.firstChild).toHaveClass('border-b-[0.5px]');
  });

  it('does not apply border styling when hasBorder is false', () => {
    const { container } = render(
      <CartGameCard
        game={mockGame}
        hasBorder={false}
        handleRemoveGame={mockHandleRemoveGame}
      />
    );

    expect(container.firstChild).not.toHaveClass('border-b-[0.5px]');
  });
});
