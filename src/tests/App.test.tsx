import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('updates depth state when slider changes', () => {
    const { getByLabelText } = render(<App />);
    const slider = getByLabelText('Depth') as HTMLInputElement;
    
    // Initial value should be 6 (default state)
    expect(slider.value).toBe('6');
    
    // Change slider value
    fireEvent.change(slider, { target: { value: '10' } });
    
    // Check if slider value updated
    expect(slider.value).toBe('10');
  });
});

