import ReviewForm from '../review-form/review-form';
import dayjs from 'dayjs';
import { Review } from '../../types';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/action';
import {
  ONE_STAR_RATIO,
  MAX_REVIEWS,
  AuthorizationStatus,
  DATE,
  MONTH_TEXT,
} from '../../constants';

type ReviewsProps = {
  reviewList: Review[];
};

function Reviews({ reviewList }: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  reviewList.sort((a, b) => dayjs(b.date).diff(a.date));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewList.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewList.map(({ id, date, user, comment, rating }, index) => {
          const reviewDate = dayjs(date).format(DATE);
          const year = dayjs(date).year();
          const month = dayjs(date).format(MONTH_TEXT);

          if (index < MAX_REVIEWS) {
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
          }

          return null;
        })}
      </ul>
      {isAuth && <ReviewForm />}
    </section>
  );
}

export { Reviews };
