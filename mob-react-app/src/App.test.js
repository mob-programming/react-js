import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Mob React App/i);
  expect(headerElement).toBeInTheDocument();
});
