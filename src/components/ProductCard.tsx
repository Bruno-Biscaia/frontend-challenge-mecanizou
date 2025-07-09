import Link from 'next/link';

type Props = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Props) {
  return (
    <Link
      href={`/products/${id}`}
      className="block border rounded hover:shadow p-4"
    >
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover mb-2 rounded-lg"
      />
      <h3 className="font-semibold text-xs">{name}</h3>
      <p>R$ {price.toFixed(2)}</p>
    </Link>
  );
}
