import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { paginate } from '@/utils/pagination';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/hooks/useAuth';
import { ProductCard } from '@/components/ProductCard';
import { Pagination } from '@/components/Pagination';

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const products = useProducts();
  const perPage = 6;
  const current = paginate(products, page, perPage);
  const totalPages = Math.ceil(products.length / perPage);

  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
