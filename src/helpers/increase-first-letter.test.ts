import { increaseFirstLetter } from './increase-first-letter';

describe('Function: increaseFirstLetter', () => {
  const EXPECTED_WORD = 'bedroom';

  it('Correct output of replacing the first letter of a word with a capital one', () => {
    const result = increaseFirstLetter(EXPECTED_WORD);

    expect(result).toBe('Bedroom');
  });
});
