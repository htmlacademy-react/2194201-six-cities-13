import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { RATINGS, Status, TextLength } from '../../constants';
import { ReviewValues } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import FormReviewRating from '../form-review-rating/form-review-rating';
import { selectStatusPost } from '../../store/reviews-data/selectors';
import { store } from '../../store';
import { setStatusPost } from '../../store/reviews-data/reviews-data';

function FormReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatusPost);
  const { id: offerId } = useParams() as { id: string };
  const { min, max } = TextLength;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState<ReviewValues>({
    id: offerId,
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    if (status === Status.Success && formRef.current !== null) {
      formRef.current.reset();
      store.dispatch(setStatusPost(Status.Idle));
      setFormData({ ...formData, rating: 0, comment: '' });
    }
  }, [formData, status]);

  const { rating, comment } = formData;
  const isValid = !!rating && comment.length >= min && comment.length <= max;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValid) {
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
    <form
      className="reviews__form form"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ star, title }) => (
          <FormReviewRating
            key={star}
            star={star}
            title={title}
            handleInputsChange={handleInputsChange}
          />
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
          disabled={!isValid || status === Status.Loading}
        >
          {status === Status.Loading ? 'Waiting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default FormReview;
