import { NameSpace, Status } from '../../constants';
import { makeFakeActiveOffer } from '../../utils/mocks/active-offer';
import { makeFakeOffers } from '../../utils/mocks/offers';
import {
  selectActiveOffer,
  selectOffers,
  selectOffersNearby,
  selectStatusAll,
  selectStatusOffer,
} from './selectors';

describe('OffersData selectors', () => {
  const offerList = makeFakeOffers();
  const offersNear = makeFakeActiveOffer();
  const state = {
    [NameSpace.Offers]: {
      offers: offerList,
      activeOffer: makeFakeActiveOffer(),
      offersNearby: [offersNear, offersNear, offersNear],
      statusAll: Status.Idle,
      statusOffer: Status.Idle,
    },
  };

  it('should return offers list from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = selectOffers(state);
    expect(result).toBe(offers);
  });

  it('should return active offer from state', () => {
    const { activeOffer } = state[NameSpace.Offers];
    const result = selectActiveOffer(state);
    expect(result).toBe(activeOffer);
  });

  it('should return offers nearby from state', () => {
    const { offersNearby } = state[NameSpace.Offers];
    const result = selectOffersNearby(state);
    expect(result).toBe(offersNearby);
  });

  it('should return status offers response value from state', () => {
    const { statusAll } = state[NameSpace.Offers];
    const result = selectStatusAll(state);
    expect(result).toBe(statusAll);
  });

  it('should return status active offer response value from state', () => {
    const { statusOffer } = state[NameSpace.Offers];
    const result = selectStatusOffer(state);
    expect(result).toBe(statusOffer);
  });
});
