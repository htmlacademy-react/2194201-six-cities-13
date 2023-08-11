import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { selectStatusPost } from '../../store/reviews-data/selectors';
import { Status } from '../../constants';

type FormReviewRatingProps = {
  star: number;
  title: string;
  currentValue: number;
  onInputsChange: (star: number) => void;
};

const FormReviewRating = memo(
  ({ star, title, currentValue, onInputsChange }: FormReviewRatingProps) => {
    const status = useAppSelector(selectStatusPost);
    return (
      <>
        <input
          onChange={() => onInputsChange?.(star)}
          className="form__rating-input visually-hidden"
          name="rating"
          value={star}
          id={`${star}-stars`}
          checked={currentValue === star}
          type="radio"
          disabled={status === Status.Loading}
        />
        <label
          htmlFor={`${star}-stars`}
          className="reviews__rating-label form__rating-label"
          title={title}
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </>
    );
  }
);

FormReviewRating.displayName = 'FormReviewRating';

export default FormReviewRating;
