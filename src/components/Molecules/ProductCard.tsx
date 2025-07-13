// src/components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/models/product';
import { Typography } from '@/components/Atoms/Typography';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div>
        <Image
          alt={product.subTitle}
          src={product.image}
          width={500}
          height={500}
          className="aspect-square w-full rounded-lg  object-cover group-hover:opacity-75 xl:aspect-7/8"
        />

        <Typography as="h3" className="mt-4 text-sm ">
          {product.name}
        </Typography>

        <Typography as="p" className="mt-1 text-lg font-medium ">
          R$ {product.price.toFixed(2)}
        </Typography>
      </div>
    </Link>
  );
}
