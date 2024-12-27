import { render, screen } from '@testing-library/react';
import { LinkButton } from './LinkButton';
describe('LinkButton Component', () => {
  it('renders children correctly', () => {
    render(
      <LinkButton variant='primary' href='/test'>
        Click Me
      </LinkButton>
    );
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies primary variant styles', () => {
    render(
      <LinkButton variant='primary' href='/test'>
        Primary Link
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /primary link/i });
    expect(link).toHaveClass(
      'bg-cta-fill-primary text-white hover:bg-cta-hover-fill-primary'
    );
  });

  it('applies secondary variant styles', () => {
    render(
      <LinkButton variant='secondary' href='/test'>
        Secondary Link
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /secondary link/i });
    expect(link).toHaveClass(
      'bg-white border border-cta-stroke-primary text-cta-content-secondary hover:bg-gray-200'
    );
  });

  it('accepts additional class names', () => {
    render(
      <LinkButton variant='primary' className='extra-class' href='/test'>
        Link with Extra Class
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /link with extra class/i });
    expect(link).toHaveClass('extra-class');
  });

  it('accepts and applies additional props', () => {
    render(
      <LinkButton variant='primary' data-testid='test-link' href='/test'>
        Test Link
      </LinkButton>
    );
    const link = screen.getByTestId('test-link');
    expect(link).toBeInTheDocument();
  });

  it('renders as a link with the correct href', () => {
    render(
      <LinkButton variant='primary' href='/test'>
        Link to Test
      </LinkButton>
    );
    const link = screen.getByRole('link', { name: /link to test/i });
    expect(link).toHaveAttribute('href', '/test');
  });
});
