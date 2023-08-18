import { pluralize } from './pluralize';

describe('Function: pluralize', () => {
  const expectedWord = 'Bedroom';

  it('If the quantity of elements is more than one, then the plural ending is displayed in the word', () => {
    const quantity = 5;
    const result = pluralize(expectedWord, quantity);

    expect(result).toBe('Bedrooms');
  });

  it('If the quantity of elements is equal to one, then the plural ending is displayed in the word', () => {
    const quantity = 1;
    const result = pluralize(expectedWord, quantity);

    expect(result).toBe('Bedroom');
  });

  it('Incorrect word output when the quantity of elements is more than one', () => {
    const quantity = 2;
    const result = pluralize(expectedWord, quantity);

    expect(result).not.toBe('Bedroom');
  });

  it('Incorrect word output if the quantity of elements is equal to one', () => {
    const quantity = 1;
    const result = pluralize(expectedWord, quantity);

    expect(result).not.toBe('Bedrooms');
  });
});
