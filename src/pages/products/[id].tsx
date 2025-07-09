import { GetStaticPaths, GetStaticProps } from 'next';
import products from '@/data/products.json';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map(p => ({ params: { id: p.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ctx => {
  const id = ctx.params?.id as string;
  const product = products.find(p => p.id === id)!;
  return { props: { product } };
};

type Props = { product: typeof products[0] };

export default function ProductDetail({ product }: Props) {
  return (
    <main className="p-6">
      <img src={product.image} alt={product.name}
        className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <span className="text-xl font-semibold">
        R$ {product.price.toFixed(2)}
      </span>
    </main>
  );
}
