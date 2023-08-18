import { increaseFirstLetter } from './increase-first-letter';

describe('Function: increaseFirstLetter', () => {
  const expectedWord = 'bedroom';

  it('Correct output of replacing the first letter of a word with a capital one', () => {
    const result = increaseFirstLetter(expectedWord);

    expect(result).toBe('Bedroom');
  });

  it('Incorrect output of replacing the first letter of a word with a capital one', () => {
    const result = increaseFirstLetter(expectedWord);

    expect(result).not.toBe('bedroom');
  });
});
