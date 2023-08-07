import cn from 'classnames';

type ButtonFavoritesProps = {
  isFavorite: boolean;
};

function ButtonFavorites({ isFavorite }: ButtonFavoritesProps): JSX.Element {
  return (
    <button
      className={cn('place-card__bookmark-button', 'button', {
        'place-card__bookmark-button--active': isFavorite,
      })}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default ButtonFavorites;