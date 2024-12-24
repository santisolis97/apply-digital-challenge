import { Game } from '@/utils/endpoint';
import React from 'react';
import { Button } from '../Button/Button';

type CartSummaryProps = {
  games: Game[];
};

export const CartSummary = ({ games }: CartSummaryProps) => {
  return (
    <div className='flex flex-col h-fit gap-8 flex-1'>
      <div className='flex-1 h-fit flex flex-col gap-8 p-8 border-[0.5px] border-stroke-secondary rounded-lg'>
        <div className='gap-3 flex flex-col'>
          <h2 className='text-2xl text-cta-stroke-primary font-bold'>
            Order Summary
          </h2>
          <h4 className='text-lg text-cta-stroke-primary'>
            {games.length} items
          </h4>
        </div>
        <div>
          <div className='flex flex-col gap-3 border-b-[1px] py-4 border-stroke-secondary'>
            {games.map((game) => (
              <div className='flex justify-between' key={game.id}>
                <h3 className='text-lg text-cta-stroke-primary'>{game.name}</h3>
                <h4 className='text-lg text-cta-stroke-primary'>
                  ${game.price}
                </h4>
              </div>
            ))}
          </div>
          <div className='py-6 flex justify-between'>
            <h3 className='text-xl text-cta-stroke-primary font-bold'>
              Order Total
            </h3>
            <h3 className='text-xl text-cta-stroke-primary font-bold'>
              ${games.reduce((acc, game) => acc + game.price, 0)}
            </h3>
          </div>
        </div>
      </div>
      <Button variant='primary'>Checkout</Button>
    </div>
  );
};
