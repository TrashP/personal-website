import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../contents/Header';

describe('Header component', () => {
  it('Renders correct name and title in heading', () => {
    render(<Header />);
    const headings = screen.getAllByRole('heading');
    expect(headings[0].textContent).toMatch(/arnab goswami/i);
    expect(headings[1].textContent).toMatch(/software developer/i);
  });

  it('Renders correct text before name', () => {
    render(<Header />);
    expect(screen.getByText(/hi, my name is/i).textContent).toMatch(
      'Hi, my name is'
    );
  });

  it('Renders correct text before title', () => {
    render(<Header />);
    expect(screen.getByText(/I'm an aspiring/i).textContent).toMatch(
      "I'm an aspiring"
    );
  });
});
