import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  it('renders the GamerShop brand name', () => {
    render(<Navbar />);

    expect(screen.getByText('GamerShop')).toBeInTheDocument();
  });

  it('renders the Link component to the homepage', () => {
    render(<Navbar />);

    const linkElement = screen.getByRole('link', { name: 'GamerShop' });
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('renders the CartIcon component', () => {
    render(<Navbar />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
