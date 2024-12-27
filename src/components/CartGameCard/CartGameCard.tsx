'use client';
import { Game } from '@/utils/endpoint';
import Image from 'next/image';
import React, { useCallback } from 'react';
type CartGameCardProps = {
  game: Game;
  hasBorder: boolean;
  handleRemoveGame: (id: string) => void;
};
export const CartGameCard = ({
  game,
  hasBorder,
  handleRemoveGame,
}: CartGameCardProps) => {
  const onRemoveGame = useCallback(() => {
    handleRemoveGame(game.id);
  }, [handleRemoveGame, game.id]);
  return (
    <div
      className={`px-4 py-5 ${
        hasBorder ? 'border-b-[0.5px] border-b-stroke-secondary' : ''
      } `}
    >
      <div className='flex gap-5 h-full flex-col sm:flex-row '>
        <div className='relative md:w-64 h-32 gap-3 md:h-auto overflow-hidden flex justify-between w-full'>
          {game.isNew && (
            <div className='absolute top-2 left-2 p-2 rounded-sm bg-surface-secondary z-10'>
              <span className='text-xs text-icon-active'>NEW</span>
            </div>
          )}
          <Image
            src={game.image}
            alt={game.name}
            priority={true}
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-full object-cover'
          />
          <button
            onClick={onRemoveGame}
            className='h-fit hover:opacity-70 flex md:hidden'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.4099 11.9991L17.7099 7.70909C17.8982 7.52078 18.004 7.26539 18.004 6.99909C18.004 6.73279 17.8982 6.47739 17.7099 6.28909C17.5216 6.10078 17.2662 5.995 16.9999 5.995C16.7336 5.995 16.4782 6.10078 16.2899 6.28909L11.9999 10.5891L7.70994 6.28909C7.52164 6.10078 7.26624 5.995 6.99994 5.995C6.73364 5.995 6.47824 6.10078 6.28994 6.28909C6.10164 6.47739 5.99585 6.73279 5.99585 6.99909C5.99585 7.26539 6.10164 7.52078 6.28994 7.70909L10.5899 11.9991L6.28994 16.2891C6.19621 16.3821 6.12182 16.4927 6.07105 16.6145C6.02028 16.7364 5.99414 16.8671 5.99414 16.9991C5.99414 17.1311 6.02028 17.2618 6.07105 17.3837C6.12182 17.5055 6.19621 17.6161 6.28994 17.7091C6.3829 17.8028 6.4935 17.8772 6.61536 17.928C6.73722 17.9787 6.86793 18.0049 6.99994 18.0049C7.13195 18.0049 7.26266 17.9787 7.38452 17.928C7.50638 17.8772 7.61698 17.8028 7.70994 17.7091L11.9999 13.4091L16.2899 17.7091C16.3829 17.8028 16.4935 17.8772 16.6154 17.928C16.7372 17.9787 16.8679 18.0049 16.9999 18.0049C17.132 18.0049 17.2627 17.9787 17.3845 17.928C17.5064 17.8772 17.617 17.8028 17.7099 17.7091C17.8037 17.6161 17.8781 17.5055 17.9288 17.3837C17.9796 17.2618 18.0057 17.1311 18.0057 16.9991C18.0057 16.8671 17.9796 16.7364 17.9288 16.6145C17.8781 16.4927 17.8037 16.3821 17.7099 16.2891L13.4099 11.9991Z'
                fill='#8F8F8F'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col flex-1 justify-between gap-22'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-neutral-500'>{game.genre.toUpperCase()}</h3>
            <div className='flex justify-between items-start flex-col gap-2'>
              <h2 className='flex-1 text-text-item-fill font-bold'>
                {game.name}
              </h2>
              <h3 className=' text-neutral-500'>{game.description}</h3>
            </div>
          </div>
          <div className='flex justify-end text-xl text-cta-stroke-primary font-bold'>
            <h3>${game.price}</h3>
          </div>
        </div>
        <button
          onClick={onRemoveGame}
          className='h-fit hover:opacity-70 md:flex hidden'
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.4099 11.9991L17.7099 7.70909C17.8982 7.52078 18.004 7.26539 18.004 6.99909C18.004 6.73279 17.8982 6.47739 17.7099 6.28909C17.5216 6.10078 17.2662 5.995 16.9999 5.995C16.7336 5.995 16.4782 6.10078 16.2899 6.28909L11.9999 10.5891L7.70994 6.28909C7.52164 6.10078 7.26624 5.995 6.99994 5.995C6.73364 5.995 6.47824 6.10078 6.28994 6.28909C6.10164 6.47739 5.99585 6.73279 5.99585 6.99909C5.99585 7.26539 6.10164 7.52078 6.28994 7.70909L10.5899 11.9991L6.28994 16.2891C6.19621 16.3821 6.12182 16.4927 6.07105 16.6145C6.02028 16.7364 5.99414 16.8671 5.99414 16.9991C5.99414 17.1311 6.02028 17.2618 6.07105 17.3837C6.12182 17.5055 6.19621 17.6161 6.28994 17.7091C6.3829 17.8028 6.4935 17.8772 6.61536 17.928C6.73722 17.9787 6.86793 18.0049 6.99994 18.0049C7.13195 18.0049 7.26266 17.9787 7.38452 17.928C7.50638 17.8772 7.61698 17.8028 7.70994 17.7091L11.9999 13.4091L16.2899 17.7091C16.3829 17.8028 16.4935 17.8772 16.6154 17.928C16.7372 17.9787 16.8679 18.0049 16.9999 18.0049C17.132 18.0049 17.2627 17.9787 17.3845 17.928C17.5064 17.8772 17.617 17.8028 17.7099 17.7091C17.8037 17.6161 17.8781 17.5055 17.9288 17.3837C17.9796 17.2618 18.0057 17.1311 18.0057 16.9991C18.0057 16.8671 17.9796 16.7364 17.9288 16.6145C17.8781 16.4927 17.8037 16.3821 17.7099 16.2891L13.4099 11.9991Z'
              fill='#8F8F8F'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
