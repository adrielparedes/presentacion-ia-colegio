import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '@/app/page';
import { Button } from '@/components/ui/primitives';
describe('Punto de partida', () => {
  it('muestra un lienzo sin demos implementadas', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Todavía no hay un panel');
    expect(screen.getByText('Simulación educativa')).toBeInTheDocument();
  });
  it('el botón base no envía formularios por accidente', () => {
    render(<Button>Revisar</Button>);
    expect(screen.getByRole('button', { name: 'Revisar' })).toHaveAttribute('type', 'button');
  });
});
