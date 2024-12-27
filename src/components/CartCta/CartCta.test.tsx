import { render, screen } from '@testing-library/react';
import CartIcon from './CartCta';
import userEvent from '@testing-library/user-event';

describe('CartIcon Component', () => {
  it('renders the component with default props', () => {
    render(<CartIcon />);

    const linkElement = screen.getByRole('link', { name: /cart/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/cart');

    const svgElement = screen.getByRole('img', { hidden: true });
    expect(svgElement).toBeInTheDocument();

    const pathElement = screen.getByTestId('svg-path');
    expect(pathElement).toHaveAttribute('fill', '#585660');
  });

  it('renders with a custom color and href', () => {
    render(<CartIcon color='#FF5733' href='/custom-cart' />);

    const linkElement = screen.getByRole('link', { name: /cart/i });
    expect(linkElement).toHaveAttribute('href', '/custom-cart');

    const pathElement = screen.getByTestId('svg-path');
    expect(pathElement).toHaveAttribute('fill', '#FF5733');
  });

  it('applies hover opacity styles', async () => {
    render(<CartIcon />);
    const linkElement = screen.getByRole('link', { name: /cart/i });

    await userEvent.hover(linkElement);
    expect(linkElement).toHaveClass('hover:opacity-70');
  });
});
