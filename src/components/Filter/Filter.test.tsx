import { render, screen, fireEvent } from '@testing-library/react';
import { Filter } from './Filter';
import { useRouter } from 'next/navigation';
import { availableFilters } from '@/utils/endpoint';
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
describe('Filter Component', () => {
  it('calls router navigation with the selected genre', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    const genres = availableFilters;
    const selectedGenre = 'Action';
    render(<Filter genres={genres} selectedGenre={selectedGenre} />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Action' } });
    expect(mockPush).toHaveBeenCalledWith('/?genre=Action&page=1');
  });

  it('calls nanvigation with "/" when the "All" option is selected', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    const genres = availableFilters;
    const selectedGenre = 'Action';
    render(<Filter genres={genres} selectedGenre={selectedGenre} />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '' } });
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
