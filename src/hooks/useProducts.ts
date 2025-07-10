import productsJson from '@/data/Products/products.json';
import { Product } from '@/models/product';

export function useProducts(): Product[] {
  return productsJson as Product[];
}
