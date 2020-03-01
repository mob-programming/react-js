import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

const LABEL__COUNTER_TALLY = 'counter tally';

describe('rendering', () => {

  it('should render the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Mob React App/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the counter button', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button').find(el => el.textContent = 'Click to Count');
    expect(button).toBeInTheDocument();
  });

  it('should render the counter reset button', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button').find(el => el.textContent = 'Click to Reset');
    expect(button).toBeInTheDocument();
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
      const { getAllByRole, findByLabelText } = render(<App />);
      const button = getAllByRole('button').find(el => el.textContent = 'Click to Count');

      for (const expectedTally of [1, 2, 3]) {
        fireEvent.click(button);
        await validateTallyOf(expectedTally, findByLabelText);
      }
    });

    it('should reset the tally when the reset button is clicked', () => {
      const { getAllByRole, findByLabelText } = render(<App />);
      const buttons = getAllByRole('button');

      // Given a tally of 3
      const counterButton = buttons.find(el => el.textContent === 'Click to Count');
      [...Array(3)].forEach(() => fireEvent.click(counterButton));

      // When the reset button is clicked
      const resetButton = buttons.find(el => el.textContent === 'Click to Reset');
      fireEvent.click(resetButton);

      // Then the tally should be 0
      validateTallyOf(0, findByLabelText);
    });
  });
});
