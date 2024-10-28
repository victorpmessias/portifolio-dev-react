import React, { act } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Counter from './Counter';

test('exibe o valor inicial do contador', () => {
  const { getByText } = render(<Counter />);
  expect(getByText('Contador: 0')).toBeInTheDocument();
});

test('incrementa o contador quando o botão Incrementar é clicado', () => {
  const { getByText } = render(<Counter />);
  act(() => {
    fireEvent.click(getByText('Incrementar'));
  });
  expect(getByText('Contador: 1')).toBeInTheDocument();
});

test('decrementa o contador quando o botão Decrementar é clicado', () => {
  const { getByText } = render(<Counter />);
  act(() => {
    fireEvent.click(getByText('Incrementar'));
    fireEvent.click(getByText('Incrementar'));
    fireEvent.click(getByText('Decrementar'));
  });
  expect(getByText('Contador: 1')).toBeInTheDocument();
});

test('o contador nao deve ser decrementado para numeros negativos', () => {
    const { getByText } = render(<Counter />);
    act(() => {
      fireEvent.click(getByText('Decrementar'));
      fireEvent.click(getByText('Decrementar'));
      fireEvent.click(getByText('Decrementar'));
    });
    expect(getByText('Contador: 0')).toBeInTheDocument();
  });