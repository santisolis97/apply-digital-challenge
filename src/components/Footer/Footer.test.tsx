import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders the component', () => {
    const screen = render(<Footer />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
