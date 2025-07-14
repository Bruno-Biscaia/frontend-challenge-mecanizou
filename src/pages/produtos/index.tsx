import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { paginate } from '@/utils/pagination';
import { ProductCard } from '@/components/Molecules/ProductCard/ProductCard';
import { Pagination } from '@/components/Molecules/Pagination';
import { Typography } from '@/components/Atoms/Typography';
import { Product } from '@/models/product';
import { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs/promises';
interface Props {
  products: Product[];
}

export default function Produtos() {
  const [page, setPage] = useState(1);
  const products = useProducts();
  const perPage = 6;
  const current = paginate(products, page, perPage);
  const totalPages = Math.ceil(products.length / perPage);

  return (
    <div className="mx-auto max-w-2xl p-3 pb-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <Typography className="mb-8 text-[20px] font-semibold ">
        Catálogo de Produtos
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {current.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const token = req.cookies['auth'];
  if (token !== 'true') {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const products: Product[] = JSON.parse(await fs.readFile(filePath, 'utf8'));

  return {
    props: { products },
  };
};
