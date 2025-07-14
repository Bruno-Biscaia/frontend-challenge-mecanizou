import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { Product } from '@/models/product';

const productMock: Product = {
  id: '1',
  name: 'Tênis Esportivo',
  price: 199.9,
  image:
    'https://images.unsplash.com/photo-1752384876830-1291984ec767?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  reviews: 4,
  numberOfReviews: 10,
  subTitle: 'Ótimo para corrida',
  description: 'está é a descrição do produto',
  categories: 'sports',
};

describe('ProductCard', () => {
  it('renderiza nome, preço e imagem', () => {
    render(<ProductCard product={productMock} />);
    expect(screen.getByText(productMock.name)).toBeInTheDocument();
    expect(
      screen.getByText(`R$ ${productMock.price.toFixed(2)}`)
    ).toBeInTheDocument();
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img).toHaveAttribute('src', productMock.image);
  });

  it('mantém o mesmo snapshot', () => {
    const { container } = render(<ProductCard product={productMock} />);
    expect(container).toMatchSnapshot();
  });
});
