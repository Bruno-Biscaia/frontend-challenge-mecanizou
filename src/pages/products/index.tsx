// src/pages/products/index.tsx
import { useEffect, useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { paginate } from '@/utils/pagination';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/hooks/useAuth';

export default function ProductsPage() {
  const all = useProducts();
  const [page, setPage] = useState(1);
  const perPage = 6;
  const current = paginate(all, page, perPage);
  const totalPages = Math.ceil(all.length / perPage);

  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  // checa auth na montagem
  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
    } else {
      setAllowed(true);
    }
  }, [router]);

  // só renderiza o conteúdo se estiver autorizado
  if (!allowed) return null;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only text-black">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.map((product) => (
            <div key={product.id} className="group">
              <img
                alt={product.description}
                src={product.image}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-10 flex items-center justify-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={page === 1}
            className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium disabled:opacity-50"
          >
            Anterior
          </button>

          {Array.from({ length: totalPages }, (_, i) => {
            const pageNum = i + 1;
            const isCurrent = pageNum === page;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                aria-current={isCurrent ? 'page' : undefined}
                className={`
                  px-3 py-1 rounded-md text-sm font-medium 
                  ${isCurrent
                    ? 'border-t-2 border-indigo-500 text-indigo-600'
                    : 'border border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium disabled:opacity-50"
          >
            Próxima
          </button>
        </nav>
      </div>
    </div>
  );
}
