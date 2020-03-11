import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

it('should increment counter value by one on click', () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText('Increment');
  const counter = getByTestId('counter');
  fireEvent.click(buttonElement);
  expect(counter.textContent).toBe('1');
  fireEvent.click(buttonElement);
  expect(counter.textContent).toBe('2');
});

it('should render the reset button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText('Reset');
  expect(buttonElement).toBeInTheDocument();
});

it('should reset the counter value when the reset button is clicked', () => {
  const { getByText, getByTestId } = render(<App />);
  const incrementButton = getByText('Increment');
  const resetButton = getByText('Reset');
  const counter = getByTestId('counter');
  fireEvent.click(incrementButton);
  expect(counter.textContent).toBe('1');
  fireEvent.click(resetButton);
  expect(counter.textContent).toBe('0');
});