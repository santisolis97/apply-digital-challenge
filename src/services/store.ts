import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Game } from '@/utils/endpoint';

interface CartStore {
  cartGames: Game[];
  addGame: (game: Game) => void;
  removeGame: (id: Game['id']) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartGames: [],
      addGame: (game) =>
        set((state) => ({ cartGames: [...state.cartGames, game] })),
      removeGame: (id) =>
        set((state) => ({
          cartGames: state.cartGames.filter((game) => game.id !== id),
        })),
    }),
    {
      name: 'bear-storage',
    }
  )
);
