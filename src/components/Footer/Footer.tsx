import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <div className='py-16 bg-neutral-700 flex justify-center items-center'>
      <div className='px-4 md:max-w-screen-desktop-xl max-w-screen-mobile'>
        <Image src='/logo.svg' alt='logo' width={170} height={44} />
      </div>
    </div>
  );
};
