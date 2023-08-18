const pluralize = (word: string, quantity: number) =>
  quantity > 1 ? `${word}s` : word;

export { pluralize };
