import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ScrollDown from '../contents/buttons/ScrollDown';

describe('Scroll down button', () => {
  it('Renders scroll down button', () => {
    const { container } = render(<ScrollDown />);
    expect(container).toMatchSnapshot();
  });
});
