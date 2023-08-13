import { address, name, random, datatype, commerce, system } from 'faker';
import { Card } from '../../types';

const makeFakeOffers = (): Card[] =>
  new Array(5).fill(null).map(
    () =>
      ({
        id: datatype.uuid(),
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
        location: {
          latitude: +address.latitude(),
          longitude: +address.longitude(),
          zoom: datatype.number(20),
        },
        isFavorite: datatype.boolean(),
        isPremium: datatype.boolean(),
        rating: datatype.number(5),
        previewImage: system.filePath(),
      } as Card)
  );

export { makeFakeOffers };
