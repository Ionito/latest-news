import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  it('should render input component', () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText('Buscar noticias...'),
    ).toBeInTheDocument();
  });
});
