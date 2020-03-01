import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

const LABEL__COUNTER_TALLY = 'counter tally';
const TEXT__BUTTON_COUNTER = 'Click to Count';
const TEXT__BUTTON_RESET = 'Click to Reset';

function findFirstWithTextContent(list, textContent) {
  return list.find(el => el.textContent === textContent);
}

describe('rendering', () => {

  it('should render the header', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/Mob React App/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render the counter button', () => {
    const { getAllByRole } = render(<App />);
    const button = findFirstWithTextContent(getAllByRole('button'), TEXT__BUTTON_COUNTER);
    expect(button).toBeInTheDocument();
  });

  it('should render the counter reset button', () => {
    const { getAllByRole } = render(<App />);
    const button = findFirstWithTextContent(getAllByRole('button'), TEXT__BUTTON_RESET);
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
      const button = findFirstWithTextContent(getAllByRole('button'), TEXT__BUTTON_COUNTER);

      for (const expectedTally of [1, 2, 3]) {
        fireEvent.click(button);
        await validateTallyOf(expectedTally, findByLabelText);
      }
    });

    it('should reset the tally when the reset button is clicked', async () => {
      const { getAllByRole, findByLabelText } = render(<App />);
      const buttons = getAllByRole('button');

      // Given a tally of 3
      const counterButton = findFirstWithTextContent(buttons, TEXT__BUTTON_COUNTER);
      [...Array(3)].forEach(() => fireEvent.click(counterButton));

      // When the reset button is clicked
      const resetButton = findFirstWithTextContent(buttons, TEXT__BUTTON_RESET);
      fireEvent.click(resetButton);

      // Then the tally should be 0
      validateTallyOf(0, findByLabelText);
    });
  });
});
