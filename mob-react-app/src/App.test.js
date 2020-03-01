import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  it('should render the counter reset button', () => {
    const { getByLabelText } = render(<App />);
    const button = getByLabelText('counter reset button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click to Reset');
  });

  it('should render the counter tally', () => {
    const { getByLabelText } = render(<App />);
    const tally = getByLabelText('counter tally');
    expect(tally).toBeInTheDocument();
    expect(tally).toHaveTextContent('0');
  });
});

describe('behaviors of', () => {

  describe('the counter', () => {

    it('should update the tally when the counter button is clicked', () => {
      const { getByLabelText, findByLabelText } = render(<App />);
      const button = getByLabelText('counter button');
      fireEvent.click(button);
      findByLabelText('counter tally').then(tally => {
        expect(tally).toHaveTextContent('1');
      });
    });

    it('should reset the tally when the reset button is clicked', () => {
      const { getByLabelText, findByLabelText } = render(<App />);

      // Given a tally of 3
      const counterButton = getByLabelText('counter button');
      [...Array(3)].forEach(() => fireEvent.click(counterButton));

      // When the reset button is clicked
      const resetButton = getByLabelText('counter reset button');
      fireEvent.click(resetButton);

      // Then the tally should be 0
      findByLabelText('counter tally').then(tally => {
        expect(tally).toHaveTextContent('0');
      });
    });
  });
});
