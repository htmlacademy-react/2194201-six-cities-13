import { memo } from 'react';

type FormReviewRatingProps = {
  star: number;
  title: string;
  onInputsChange: (star: number) => void;
};

const FormReviewRating = memo(
  ({ star, title, onInputsChange }: FormReviewRatingProps) => (
    <>
      <input
        onChange={() => onInputsChange?.(star)}
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
    </>
  )
);

FormReviewRating.displayName = 'FormReviewRating';

export default FormReviewRating;
