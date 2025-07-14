import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  const onClick = jest.fn();

  it('renderiza o texto passado como children', () => {
    render(<Button onClick={onClick}>Comprar</Button>);
    expect(
      screen.getByRole('button', { name: /comprar/i })
    ).toBeInTheDocument();
  });

  it('chama a função onClick ao clicar', () => {
    render(<Button onClick={onClick}>Comprar</Button>);
    fireEvent.click(screen.getByRole('button', { name: /comprar/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('mantém o mesmo snapshot', () => {
    const { container } = render(<Button onClick={onClick}>Comprar</Button>);
    expect(container).toMatchSnapshot();
  });
});
