import { render, screen } from '@testing-library/react';
import { Back } from './Back';
describe('Back Component', () => {
  it('renders the link with the correct text', () => {
    render(<Back backTo='Home' href='/home' />);
    expect(screen.getByText('Back to Home')).toBeInTheDocument();
  });

  it('applies the correct href to the link', () => {
    render(<Back backTo='Dashboard' href='/dashboard' />);
    const link = screen.getByRole('link', { name: /back to dashboard/i });
    expect(link).toHaveAttribute('href', '/dashboard');
  });

  it('renders the SVG icon correctly', () => {
    render(<Back backTo='Profile' href='/profile' />);
    const svg = screen.getByRole('img', { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it('applies the correct class names to the link', () => {
    render(<Back backTo='Settings' href='/settings' />);
    const link = screen.getByRole('link', { name: /back to settings/i });
    expect(link).toHaveClass('flex gap-2 hover:opacity-70 py-6');
  });
});
