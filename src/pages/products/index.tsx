// src/pages/products/index.tsx
import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { paginate } from '@/utils/pagination';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const all = useProducts();
  const [page, setPage] = useState(1);
  const perPage = 6;
  const current = paginate(all, page, perPage);
  const totalPages = Math.ceil(all.length / perPage);

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {current.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`mx-1 px-3 py-1 border ${page === i + 1 ? 'bg-blue-600 text-white' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
