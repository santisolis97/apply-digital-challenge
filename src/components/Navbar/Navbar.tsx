import React from 'react';
import CartIcon from '../CartCta/CartCta';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className=' bg-surface-secondary w-full py-5'>
      <div className='px-4  max-w-screen-desktop-xl flex justify-between items-center m-auto '>
        <Link href='/' passHref>
          <h1 className='font-bold text-2xl text-cta-fill-primary'>
            GamerShop
          </h1>
        </Link>

        <CartIcon />
      </div>
    </div>
  );
};
