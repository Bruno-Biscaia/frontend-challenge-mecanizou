import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'

test('ThemeToggle exibe icone correto e alterna tema', () => {
  render(<ThemeToggle />)
  const button = screen.getByRole('button', { name: /toggle theme/i })

  // inicialmente, supondo tema claro => mostra lua
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument()

  fireEvent.click(button)
  // depois de um toggle, mostra sol
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument()
})
