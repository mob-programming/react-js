import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

const LABEL__COUNTER_TALLY = 'counter tally';
const LABEL__COUNTER_BUTTON = 'counter button';
const LABEL__COUNTER_RESET_BUTTON = 'counter reset button';

describe('rendering', () => {

  it('should render the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Mob React App/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the counter button', () => {
    const { getByLabelText } = render(<App />);
    const button = getByLabelText(LABEL__COUNTER_BUTTON);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click to Count');
  });

  it('should render the counter reset button', () => {
    const { getByLabelText } = render(<App />);
    const button = getByLabelText(LABEL__COUNTER_RESET_BUTTON);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click to Reset');
  });

  it('should render the counter tally', () => {
    const { getByLabelText } = render(<App />);
    const tally = getByLabelText(LABEL__COUNTER_TALLY);
    expect(tally).toBeInTheDocument();
    expect(tally).toHaveTextContent('0');
  });
});

describe('behaviors of', () => {

  describe('the counter', () => {

    function validateTallyOf(expected, finder) {
      return finder(LABEL__COUNTER_TALLY).then(tally => {
        expect(tally).toHaveTextContent(expected.toString());
      });
    }

    it('should update the tally when the counter button is clicked', async () => {
      const { getByLabelText, findByLabelText } = render(<App />);
      const button = getByLabelText(LABEL__COUNTER_BUTTON);

      for (const expectedTally of [1, 2, 3]) {
        fireEvent.click(button);
        await validateTallyOf(expectedTally, findByLabelText);
      }
    });

    it('should reset the tally when the reset button is clicked', () => {
      const { getByLabelText, findByLabelText } = render(<App />);

      // Given a tally of 3
      const counterButton = getByLabelText(LABEL__COUNTER_BUTTON);
      [...Array(3)].forEach(() => fireEvent.click(counterButton));

      // When the reset button is clicked
      const resetButton = getByLabelText(LABEL__COUNTER_RESET_BUTTON);
      fireEvent.click(resetButton);

      // Then the tally should be 0
      validateTallyOf(0, findByLabelText);
    });
  });
});
