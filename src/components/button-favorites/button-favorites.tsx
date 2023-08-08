import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';

type ButtonFavoritesProps = {
  className: string;
  isFavorite: boolean;
  width: number;
  height: number;
};

function ButtonFavorites({
  className,
  isFavorite,
  width,
  height,
}: ButtonFavoritesProps): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const buttonActiveClass = `${className}__bookmark-button--active`;

  const handleFavoritesButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={cn(`${className}__bookmark-button`, 'button', {
        [buttonActiveClass]: isFavorite,
      })}
      onClick={handleFavoritesButtonClick}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default ButtonFavorites;
