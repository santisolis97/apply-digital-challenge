import { Catalog } from '@/components/Catalog/Catalog';
import { CatalogSkeleton } from '@/components/Catalog/CatalogSkeleton';
import { Suspense } from 'react';

type PageProps = {
  searchParams: { page: string; genre: string };
};

export default async function Page({ searchParams }: PageProps) {
  const { page = '1', genre = '' } = searchParams;

  return (
    <div className='pt-12 min-h-[80dvh]'>
      <div className='flex flex-col gap-12 mx-auto px-4 md:max-w-screen-desktop-xl max-w-screen-mobile text-center py-12'>
        <h2 className='font-bold text-4xl text-cta-content-secondary text-start'>
          Top Sellers
        </h2>
      </div>

      <section className='py-12'>
        <Suspense key={`${page}-${genre}`} fallback={<CatalogSkeleton />}>
          <Catalog page={page} genre={genre} />
        </Suspense>
      </section>
    </div>
  );
}
