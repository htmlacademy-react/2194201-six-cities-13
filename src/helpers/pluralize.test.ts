import { pluralize } from './pluralize';

describe('Function: pluralize', () => {
  const EXPECTED_WORD = 'Bedroom';

  it('If the quantity of elements is more than one, then the plural ending is displayed in the word', () => {
    const QUANTITY = 5;
    const result = pluralize(EXPECTED_WORD, QUANTITY);

    expect(result).toBe('Bedrooms');
  });

  it('If the quantity of elements is equal to one, then the plural ending is displayed in the word', () => {
    const QUANTITY = 1;
    const result = pluralize(EXPECTED_WORD, QUANTITY);

    expect(result).toBe('Bedroom');
  });

  it('The function must preserve the case of letters', () => {
    const QUANTITY = 4;
    const result = pluralize(EXPECTED_WORD, QUANTITY);

    expect(result).not.toBe('bedrooms');
  });
});
