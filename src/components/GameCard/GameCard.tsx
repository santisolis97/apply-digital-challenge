'use client';
import { Game } from '@/utils/endpoint';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { Button } from '../Button/Button';
import { useCartStore } from '@/services/store';
import { useShallow } from 'zustand/shallow';

type GameCardProps = {
  game: Game;
};

export const GameCard = ({ game }: GameCardProps) => {
  const { addGame, cartGames, removeGame } = useCartStore(
    useShallow((state) => ({
      cartGames: state.cartGames,
      addGame: state.addGame,
      removeGame: state.removeGame,
    }))
  );

  const isGameInCart = cartGames.some((cartGame) => cartGame.id === game.id);

  const handleGameAction = useCallback(() => {
    if (isGameInCart) {
      removeGame(game.id);
    } else {
      addGame(game);
    }
  }, [addGame, game, isGameInCart, removeGame]);

  return (
    <div className='rounded-2xl p-6 border-[0.5px] border-stroke-secondary '>
      <div className='flex flex-col gap-5 h-full '>
        <div className='relative w-full h-60 rounded-t-2xl overflow-hidden '>
          <Image
            src={game.image}
            alt={game.name}
            priority={true}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col flex-1 justify-between gap-22'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-neutral-500'>{game.genre.toUpperCase()}</h3>
            <div className='flex justify-between items-start gap-6'>
              <h3 className='flex-1 text-text-item-fill'>{game.name}</h3>
              <h3 className=' text-text-item-fill'>${game.price}</h3>
            </div>
          </div>
          <div>
            <Button
              onClick={handleGameAction}
              variant={isGameInCart ? 'error' : 'secondary'}
            >
              {!isGameInCart ? 'ADD TO CART' : 'REMOVE FROM CART'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
