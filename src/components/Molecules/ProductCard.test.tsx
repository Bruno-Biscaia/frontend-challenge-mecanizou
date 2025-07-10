import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'
import { Product } from '@/models/product'

const mock: Product = {
  id: '1',
  name: 'Teste Shoe',
  subTitle: 'desc',
  description: '...',
  price: 123.45,
  image: 'https://via.placeholder.com/150',
  numberOfReviews: 10,
  reviews: 4,
  categories: 'esporte',
}

test('ProductCard renderiza nome e preço', () => {
  render(<ProductCard product={mock} />)
  expect(screen.getByText('Teste Shoe')).toBeInTheDocument()
  expect(screen.getByText('R$ 123,45')).toBeInTheDocument()
})

test('ProductCard snapshot', () => {
  const { asFragment } = render(<ProductCard product={mock} />)
  expect(asFragment()).toMatchSnapshot()
})
