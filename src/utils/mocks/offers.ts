import { address, name, random, datatype, commerce, system } from 'faker';
import { Card } from '../../types';

type OffersParameters = {
  id?: string;
  location?: Location;
  isFavorite?: boolean;
  isOneIdLiteral?: boolean;
};

const makeFakeOffers = (parameters?: OffersParameters): Card[] =>
  new Array(5).fill(null).map((_item, index) => {
    if (parameters?.isOneIdLiteral && index > 0) {
      parameters.id = '';
    }

    return {
      id: parameters?.id ?? datatype.uuid(),
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
    } as Card;
  });

export { makeFakeOffers };
