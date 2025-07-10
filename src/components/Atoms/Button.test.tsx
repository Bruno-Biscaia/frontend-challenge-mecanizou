// src/components/Atoms/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'


describe('<Button />', () => {
  // TESTE RENDERIZAÇÃO
  it('renderiza com o texto passado', () => {
    render(<Button>Enviar</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText('Enviar')).toBeTruthy()
  })
  // TESTE INTERAÇÃO
  it('dispara onClick ao ser clicado', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>OK</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  // SNAPSHOT
  it('corresponde ao snapshot', () => {
    const { asFragment } = render(<Button disabled>Bloqueado</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
