import { address, name, random, datatype, commerce, system } from 'faker';
import { Card } from '../../types';

type OffersParameters = {
  id?: string;
  location?: Location;
  isFavorite?: boolean;
  isOneIdLiteral?: boolean;
};

const getRandomIndex = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + min);

const makeFakeOffers = (parameters?: OffersParameters): Card[] => {
  const arrayLength = 5;
  const randomIndex = getRandomIndex(0, arrayLength);

  return new Array(arrayLength).fill(null).map(
    (_item, index) =>
      ({
        id:
          parameters?.isOneIdLiteral && index === randomIndex
            ? parameters?.id
            : datatype.uuid(),
        title: name.title(),
        type: random.word(),
        price: +commerce.price(),
        city: {
          name: address.cityName(),
          location: {
            latitude: +address.latitude(),
            longitude: +address.longitude(),
            zoom: datatype.number(20),
          },
        },
        location: parameters?.location ?? {
          latitude: +address.latitude(),
          longitude: +address.longitude(),
          zoom: datatype.number(20),
        },
        isFavorite: parameters?.isFavorite ?? datatype.boolean(),
        isPremium: datatype.boolean(),
        rating: datatype.number(5),
        previewImage: system.filePath(),
      } as Card)
  );
};

export { makeFakeOffers };
