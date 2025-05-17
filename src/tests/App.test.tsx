import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('updates shadow when depth changes', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const slider = getByLabelText('Depth') as HTMLInputElement;
    const card = getByTestId('card');
    const initial = card.style.boxShadow;
    fireEvent.change(slider, { target: { value: '10' } });
    expect(card.style.boxShadow).not.toBe(initial);
  });
});

