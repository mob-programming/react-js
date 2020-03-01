import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Mob React App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders counter button', () => {
  const { getByLabelText } = render(<App />);
  const counterButton = getByLabelText('counter button');
  expect(counterButton).toBeInTheDocument();
  expect(counterButton).toHaveTextContent('Click to Count');
});

test('renders counter tally', () => {
  const { getByLabelText } = render(<App />);
  const tally = getByLabelText('counter tally');
  expect(tally).toBeInTheDocument();
  expect(tally).toHaveTextContent('0');
});