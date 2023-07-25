import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { RATINGS, TextLength } from '../../constants';
import { TReview } from '../../types';

function ReviewForm(): JSX.Element {
  const { min, max } = TextLength;

  const [formData, setFormData] = useState<TReview>({
    rating: 0,
    review: '',
  });

  const { rating, review } = formData;
  const isValid = !!rating && review.length > min && review.length <= max;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;
    form.reset();

    setFormData({ ...formData, rating: 0, review: '' });
    // TODO: Здесь будет код отправки формы на сервер и проверка.
  };

  const handleInputsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: name === 'rating' ? +value : value,
    });
  };

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: name === 'rating' ? +value : value,
    });
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ star, title }) => (
          <Fragment key={star}>
            <input
              onChange={handleInputsChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-star`}
              type="radio"
            />
            <label
              htmlFor={`${star}-star`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleTextAreaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue=""
        minLength={min}
        maxLength={max}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{min} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
