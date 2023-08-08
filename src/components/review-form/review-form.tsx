import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { RATINGS, TextLength } from '../../constants';
import { ReviewValues } from '../../types';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';

type ReviewFormProps = {
  offerId: string;
};

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { min, max } = TextLength;

  const [formData, setFormData] = useState<ReviewValues>({
    id: offerId,
    rating: 0,
    comment: '',
  });

  const { rating, comment } = formData;
  const isValid = !!rating && comment.length >= min && comment.length <= max;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setFormData({ ...formData, rating: 0, comment: '' });

    if (isValid) {
      const form = evt.target as HTMLFormElement;
      form.reset();

      dispatch(postReviewAction(formData));
    }
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
    <form className="reviews__form form" onSubmit={handleFormSubmit}>
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
        name="comment"
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
