import { render, act } from '@testing-library/react';
import { Game } from '@/utils/endpoint';
import { useCartStore } from './store';

jest.mock('zustand/middleware', () => ({
  persist: (fn: any) => fn,
}));

beforeEach(() => {
  useCartStore.setState({ cartGames: [] });
});

const game1: Game = {
  id: '1',
  name: 'Game 1',
  genre: 'Action',
  description: 'An exciting action game.',
  price: 59.99,
  isNew: false,
  image: '/game1.jpg',
};
const game2: Game = {
  id: '2',
  name: 'Game 2',
  genre: 'RPG',
  description: 'An immersive RPG experience.',
  price: 49.99,
  isNew: true,
  image: '/game2.jpg',
};

describe('useCartStore', () => {
  it('should add a game to the cart', () => {
    act(() => {
      useCartStore.getState().addGame(game1);
    });
    const cartGames = useCartStore.getState().cartGames;
    expect(cartGames).toHaveLength(1);
    expect(cartGames[0].id).toBe('1');
  });

  it('should remove a game from the cart', () => {
    act(() => {
      useCartStore.getState().addGame(game1);
      useCartStore.getState().addGame(game2);
    });
    act(() => {
      useCartStore.getState().removeGame(game1.id);
    });
    const cartGames = useCartStore.getState().cartGames;
    expect(cartGames).toHaveLength(1);
    expect(cartGames[0].id).toBe('2');
  });
});
