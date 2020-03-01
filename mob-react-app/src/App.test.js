import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('rendering', () => {

  it('should render the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Mob React App/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the counter button', () => {
    const { getByLabelText } = render(<App />);
    const button = getByLabelText('counter button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click to Count');
  });

  it('should render the counter tally', () => {
    const { getByLabelText } = render(<App />);
    const tally = getByLabelText('counter tally');
    expect(tally).toBeInTheDocument();
    expect(tally).toHaveTextContent('0');
  });
});
