import { Archivo } from 'next/font/google';
import React, { ButtonHTMLAttributes } from 'react';

const archivo = Archivo({ subsets: ['latin'] });
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  const styles = {
    primary: 'bg-cta-fill-primary text-white hover:bg-cta-hover-fill-primary',
    secondary:
      'bg-white border border-cta-stroke-primary text-cta-content-secondary hover:bg-gray-200',
    error: 'bg-white border border-red-500 text-red-500 hover:bg-gray-200',
  };
  return (
    <button
      {...props}
      className={`${styles[variant]} flex justify-center items-center rounded-lg py-4 w-full  transition-all duration-300 ${className}`}
    >
      <p className={`font-bold text-base ${archivo.className}`}>{children}</p>
    </button>
  );
};
