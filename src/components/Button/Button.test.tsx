import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button variant='primary'>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies primary variant styles', () => {
    render(<Button variant='primary'>Primary Button</Button>);
    const button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toHaveClass(
      'bg-cta-fill-primary text-white hover:bg-cta-hover-fill-primary'
    );
  });

  it('applies secondary variant styles', () => {
    render(<Button variant='secondary'>Secondary Button</Button>);
    const button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toHaveClass(
      'bg-white border border-cta-stroke-primary text-cta-content-secondary hover:bg-gray-200'
    );
  });

  it('applies error variant styles', () => {
    render(<Button variant='error'>Error Button</Button>);
    const button = screen.getByRole('button', { name: /error button/i });
    expect(button).toHaveClass(
      'bg-white border border-red-500 text-red-500 hover:bg-gray-200'
    );
  });

  it('accepts additional class names', () => {
    render(
      <Button variant='primary' className='extra-class'>
        Button with Extra Class
      </Button>
    );
    const button = screen.getByRole('button', {
      name: /button with extra class/i,
    });
    expect(button).toHaveClass('extra-class');
  });

  it('accepts and applies additional props', () => {
    render(
      <Button variant='primary' data-testid='test-button'>
        Test Button
      </Button>
    );
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <Button variant='primary' onClick={handleClick}>
        Clickable Button
      </Button>
    );
    const button = screen.getByRole('button', { name: /clickable button/i });
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is set', () => {
    render(
      <Button variant='primary' disabled>
        Disabled Button
      </Button>
    );
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });
});
