import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { paginate } from '@/utils/pagination';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/hooks/useAuth';
import { ProductCard } from '@/components/Molecules/ProductCard';
import { Pagination } from '@/components/Molecules/Pagination';
import { Typography } from '@/components/Atoms/Typography';

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
    <div className="mx-auto max-w-2xl p-3 pb-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <Typography className="mb-8 text-[20px] font-semibold ">
        Catálogo de Produtos
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}
