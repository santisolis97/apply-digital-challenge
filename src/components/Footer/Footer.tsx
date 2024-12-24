import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <div className='py-16 bg-neutral-700 flex justify-center items-center'>
      <div className='px-4 md:max-w-screen-desktop-xl max-w-screen-mobile'>
        <Image
          src='/logo.svg'
          alt='logo'
          height={0}
          priority
          width={0}
          className='h-[44px] w-[170px]'
        />
      </div>
    </div>
  );
};
