import {
  address,
  name,
  random,
  datatype,
  commerce,
  lorem,
  system,
} from 'faker';
import { ActiveOfferConfig, OfferCard } from '../../types';

const makeFakeActiveOffer = (config?: ActiveOfferConfig): OfferCard =>
  ({
    id: config?.id ?? datatype.uuid(),
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
    isFavorite: config?.isFavorite ?? datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number(5),
    description: lorem.slug(),
    bedrooms: datatype.number(3),
    goods: [random.word(), random.word(), random.word()],
    host: {
      name: `${name.firstName()} ${name.lastName()}`,
      avatarUrl: system.filePath(),
      isPro: datatype.boolean(),
    },
    images: [system.filePath(), system.filePath(), system.filePath()],
    maxAdults: datatype.number(5),
  } as OfferCard);

export { makeFakeActiveOffer };
