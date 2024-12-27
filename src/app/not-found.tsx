'use client';

import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-9xl font-extrabold text-gray-800'>404</h1>
        <p className='text-xl text-gray-600 mt-4'>
          Oops! The page you are looking for doesn&apos;t exist.
        </p>
        <div className='mt-6'>
          <Link
            href='/'
            className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
