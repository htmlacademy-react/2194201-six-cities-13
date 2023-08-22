import {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from 'react';
import { useParams } from 'react-router-dom';
import { RATINGS, Status, TextareaLength } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { postReviewAction } from '../../store/api-actions';
import { selectStatusPost } from '../../store/reviews-data/selectors';
import FormReviewRating from '../form-review-rating/form-review-rating';
import { ParamsId } from '../../types';

function FormReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatusPost);
  const { id } = useParams() as ParamsId;
  const { Min, Max } = TextareaLength;

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    if (isMounted && status === Status.Success) {
      setRating(0);
      setComment('');
    }

    return () => {
      isMounted = false;
    };
  }, [status]);

  const isValid = !!rating && comment.length >= Min && comment.length <= Max;

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isValid) {
      dispatch(
        postReviewAction({
          id,
          rating,
          comment,
        })
      );
    }
  };

  const handleInputsChange = useCallback((star: number) => {
    setRating(star);
  }, []);

  const handleTextAreaChange = ({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ star, title }) => (
          <FormReviewRating
            key={star}
            star={star}
            title={title}
            currentValue={rating}
            handleInputsChange={handleInputsChange}
          />
        ))}
      </div>
      <textarea
        onChange={handleTextAreaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        disabled={status === Status.Loading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{Min} characters</b>
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
