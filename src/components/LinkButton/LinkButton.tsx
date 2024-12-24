import { Archivo } from 'next/font/google';
import Link, { LinkProps } from 'next/link';
import React from 'react';

const archivo = Archivo({ subsets: ['latin'] });
type LinkButtonProps = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
} & LinkProps;

export const LinkButton = ({
  variant,
  children,
  className,
  ...linkProps
}: LinkButtonProps) => {
  const styles = {
    primary: 'bg-cta-fill-primary text-white hover:bg-cta-hover-fill-primary',
    secondary:
      'bg-white border border-cta-stroke-primary text-cta-content-secondary hover:bg-gray-200',
  };
  return (
    <Link
      {...linkProps}
      className={`${styles[variant]} flex justify-center items-center rounded-lg py-4 w-full  transition-all duration-300 ${className}`}
    >
      <p className={`font-bold text-base ${archivo.className}`}>{children}</p>
    </Link>
  );
};
