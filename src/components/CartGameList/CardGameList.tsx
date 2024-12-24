import { Game } from '@/utils/endpoint';
import React from 'react';
import { CartGameCard } from '../CartGameCard/CartGameCard';

type CardGameListProps = {
  cartGames: Game[];
  removeGame: (id: Game['id']) => void;
};

export const CardGameList = ({ cartGames, removeGame }: CardGameListProps) => {
  return (
    <div className='w-full lg:w-3/5'>
      {cartGames.map((game, index) => (
        <CartGameCard
          handleRemoveGame={removeGame}
          hasBorder={index !== cartGames.length - 1}
          key={game.id}
          game={game}
        />
      ))}
    </div>
  );
};
