import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormReview from '../form-review/form-review';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectOfferReviews } from '../../store/reviews-data/selectors';
import { selectAuthStatus } from '../../store/user-process/selectors';
import {
  ONE_STAR_RATIO,
  MAX_REVIEWS,
  AuthorizationStatus,
  DateType,
} from '../../constants';
import { fetchReviewsAction } from '../../store/api-actions';
import { ParamsId } from '../../types';

function Reviews(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const reviewList = useAppSelector(selectOfferReviews);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const { id: offerId } = useParams() as ParamsId;

  useEffect(() => {
    dispatch(fetchReviewsAction(offerId));
  }, [offerId, dispatch]);

  const sortedReviews = [...reviewList]
    .sort((a, b) => dayjs(b.date).diff(a.date))
    .slice(0, MAX_REVIEWS);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewList.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map(({ id, date, user, comment, rating }) => {
          const reviewDate = dayjs(date).format(DateType.Date);
          const year = dayjs(date).year();
          const month = dayjs(date).format(DateType.Month);

          return (
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={user.avatarUrl}
                    width={54}
                    height={54}
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span
                      style={{
                        width: `${rating * ONE_STAR_RATIO}%`,
                      }}
                    />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{comment}</p>
                <time className="reviews__time" dateTime={reviewDate}>
                  {month} {year}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
      {isAuth && <FormReview />}
    </section>
  );
}

export { Reviews };
