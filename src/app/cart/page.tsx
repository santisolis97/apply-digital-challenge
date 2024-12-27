'use client';
import { Back } from '@/components/Back/Back';
import { CardGameList } from '@/components/CartGameList/CardGameList';
import { CartSummary } from '@/components/CartSummary/CartSummary';
import { LinkButton } from '@/components/LinkButton/LinkButton';
import { useCartStore } from '@/services/store';
import React from 'react';
import { useShallow } from 'zustand/shallow';

const CartPage = () => {
  const { cartGames, removeGame } = useCartStore(
    useShallow((state) => ({
      cartGames: state.cartGames,
      removeGame: state.removeGame,
    }))
  );
  return (
    <div className='flex flex-col gap-12 mx-auto px-4 md:max-w-screen-desktop-xl min-h-[80dvh]'>
      <Back backTo='Catalog' href='/' />
      <section className='py-12'>
        {cartGames && cartGames.length === 0 && (
          <div className='flex gap-3 w-full text-center px-4 flex-col mx-auto md:max-w-screen-desktop-xl max-w-screen-mobile border rounded-lg py-4 border-stroke-secondary'>
            <h1 className='text-4xl text-cta-stroke-primary font-bold'>
              Your Cart is empty
            </h1>
            <div className='mt-12'>
              <LinkButton
                href={`/`}
                passHref
                variant='primary'
                className='p-6 flex'
              >
                CONTINUE SHOPPING
              </LinkButton>
            </div>
          </div>
        )}
        {cartGames && cartGames.length > 0 && (
          <>
            <h1 className='text-4xl text-cta-stroke-primary font-bold'>
              Your Cart
            </h1>
            <h3 className='text-2xl text-cta-stroke-primary'>
              {cartGames.length} items
            </h3>
            <div className='flex pt-12 gap-20 flex-col lg:flex-row'>
              <CardGameList cartGames={cartGames} removeGame={removeGame} />
              <CartSummary games={cartGames} />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default CartPage;
