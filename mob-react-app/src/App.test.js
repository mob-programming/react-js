import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render the header', () => {
  const { getByText } = render(<App />); // See testing-library API
  const headerElement = getByText(/Mob React App/i);
  expect(headerElement).toBeInTheDocument(); // See Jest API
});

