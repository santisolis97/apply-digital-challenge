import { Catalog } from '@/components/Catalog/Catalog';
import { CatalogSkeleton } from '@/components/Catalog/CatalogSkeleton';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; genre: string };
}) {
  const { page = '1', genre = '' } = searchParams;

  return (
    <div className='pt-12'>
      <div className='flex flex-col gap-12 mx-auto px-4 md:max-w-screen-desktop-xl max-w-screen-mobile text-center py-12'>
        <h2 className='font-bold text-4xl text-cta-content-secondary text-start'>
          Top Sellers
        </h2>
      </div>

      <div className='py-12'>
        <Suspense key={`${page}-${genre}`} fallback={<CatalogSkeleton />}>
          <Catalog page={page} genre={genre} />
        </Suspense>
      </div>
    </div>
  );
}
