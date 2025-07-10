import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'

test('Pagination chama onPageChange corretamente', () => {
  const fn = jest.fn()
  render(<Pagination page={2} totalPages={5} onPageChange={fn} />)

  // botão anterior
  fireEvent.click(screen.getByText('Anterior'))
  expect(fn).toHaveBeenCalledWith(1)

  // botão número 4
  fireEvent.click(screen.getByText('4'))
  expect(fn).toHaveBeenCalledWith(4)

  // próxima
  fireEvent.click(screen.getByText('Próxima'))
  expect(fn).toHaveBeenCalledWith(3)
})
