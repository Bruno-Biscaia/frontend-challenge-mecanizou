import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import { ArrowLeftCircleIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Product } from '@/models/product';
import { RatingStars } from '@/components/Molecules/RatingStars';
import { Typography } from '@/components/Atoms/Typography';

interface Props {
  product: Product;
}

export default function Produto({ product }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-3 pb-12  md:px-8  lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      {/* Voltar */}
      <div className="lg:col-span-2">
        <Link
          href="/produtos"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
        >
          <ArrowLeftCircleIcon className="h-10 w-10" aria-hidden="true" />
        </Link>
      </div>

      {/* Texto */}
      <div className="lg:max-w-lg lg:self-end">
        <Typography
          as="h1"
          className="text-3xl font-bold tracking-tight  sm:text-4xl"
        >
          {product.name}
        </Typography>

        <div className="mt-4 flex items-center">
          <Typography as="p" className="text-2xl font-semibold ">
            R$ {product.price.toFixed(2)}
          </Typography>
          <RatingStars
            rating={product.reviews}
            totalReviews={product.numberOfReviews}
          />
        </div>

        <div className="mt-6 space-y-6">
          <Typography as="p" className="text-base  text-justify">
            {product.description}
          </Typography>
        </div>

        <div className="mt-6 flex items-center space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
          <Typography as="p" className="text-sm ">
            Em estoque e pronto para envio
          </Typography>
        </div>
      </div>

      {/* Imagem */}
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <Image
          alt={product.subTitle}
          src={product.image}
          width={700}
          height={700}
          className="aspect-square w-full rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const products: Product[] = JSON.parse(fileContents);

  const paths = products.map((p) => ({
    params: { id: p.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const products: Product[] = JSON.parse(fileContents);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60 * 60,
  };
};
