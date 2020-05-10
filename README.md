# May Mob Programming Workshop Challenge

Using React, add to the existing app, a [Rot13](https://en.wikipedia.org/wiki/ROT13) encoder with an input text area, a submit button, and a display which shows the encoded value of the text.

**Note**: You may have to do a little refactoring before you get started on the challenge.

- When the submit button is clicked, encoded text is displayed in the display area.

If that's too easy, add a clear button.

- When the clear button is clicked, the display area is cleared.

If that's too easy, add a Rot13 decoder, which will take Rot13 input, and output decoded text in the display area.

If that's too easy, implement a ROT_n_ decoder, which will allow the user to specify the rotation length.


## Methodology
- Use TDD with Jest and React-testing-library.
- All existing tests must continue to pass. We're not changing any counter tally feature behavior.
- Our mob(s) will be using the `mob` command line tool to manage git handoffs. The timer will be started by the driver on each turn.
    - Some configuration will be required to push to the correct branches and not interfere with other mobs' work. See [the mob configuration docs](https://github.com/remotemobprogramming/mob#how-to-configure).

### Starting Point
- A React component is prepared
- A failing test is prepared, and a hint in the component is provided
- Some CSS is prepared, but can be changed to suit the mob's desires

### Resources

- [The Mob cli tool docs](https://github.com/remotemobprogramming/mob#swift-git-handover-with-mob)
- [React-testing-library docs](https://testing-library.com/docs/dom-testing-library/api-queries)
- [Jest docs](https://jestjs.io/docs/en/expect)
- [Jest Dom docs](https://github.com/testing-library/jest-dom#custom-matchers)