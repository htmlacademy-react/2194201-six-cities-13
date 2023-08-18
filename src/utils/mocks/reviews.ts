import { name, datatype, system, date, lorem } from 'faker';
import { Review } from '../../types';

const makeFakeReviews = (): Review[] =>
  new Array(3).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
        date: date.past().toDateString(),
        user: {
          name: `${name.firstName()} ${name.lastName()}`,
          avatarUrl: system.filePath(),
          isPro: datatype.boolean(),
        },
        comment: lorem.paragraph(),
        rating: datatype.number(5),
      } as Review)
  );

export { makeFakeReviews };
