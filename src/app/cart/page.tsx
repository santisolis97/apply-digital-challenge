'use client';
import { Back } from '@/components/Back/Back';
import { CardGameList } from '@/components/CartGameList/CardGameList';
import { CartSummary } from '@/components/CartSummary/CartSummary';
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
    <div className='flex flex-col gap-12 mx-auto px-4 md:max-w-screen-desktop-xl '>
      <Back backTo='Catalog' href='/' />
      <div className='py-12'>
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
      </div>
    </div>
  );
};

export default CartPage;
