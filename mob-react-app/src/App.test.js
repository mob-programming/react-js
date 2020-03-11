import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('should render the header', () => {
  const { getByText } = render(<App />); // See testing-library API
  const headerElement = getByText(/Mob React App/i);
  expect(headerElement).toBeInTheDocument(); // See Jest API
});

it('should show initial count as zero', () => {
  const { getByTestId } = render(<App />)
  const counter = getByTestId('counter');
  expect(counter.textContent).toBe('0');
});

it('should render the increment button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText('Increment');
  expect(buttonElement).toBeInTheDocument();
});