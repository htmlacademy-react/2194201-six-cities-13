import { ChangeEvent } from 'react';

type FormReviewRatingProps = {
  star: number;
  title: string;
  handleInputsChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function FormReviewRating({
  star,
  title,
  handleInputsChange,
}: FormReviewRatingProps) {
  return (
    <>
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
    </>
  );
}

export default FormReviewRating;
