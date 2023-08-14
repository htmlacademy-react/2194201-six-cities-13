import cn from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { debounce } from 'ts-debounce';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';
import {
  AppRoute,
  AuthorizationStatus,
  FAVORITES_TIMEOUT,
} from '../../constants';
import { changeFavoriteStatusAction } from '../../store/api-actions';

type ButtonFavoritesProps = {
  className: string;
  isFavorite: boolean;
  offerId: string;
  width: number;
  height: number;
};

function ButtonFavorites({
  className,
  isFavorite,
  offerId,
  width,
  height,
}: ButtonFavoritesProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const authorizationStatus = useAppSelector(selectAuthStatus);
  const isNoAuth = authorizationStatus === AuthorizationStatus.NoAuth;

  const buttonActiveClass = `${className}__bookmark-button--active`;
  const status = Number(!isFavorite);

  const changeFavoriteStatus = () => {
    dispatch(
      changeFavoriteStatusAction({
        offerId,
        status,
      })
    );
  };

  const favoriteStatusTimeout = debounce(
    changeFavoriteStatus,
    FAVORITES_TIMEOUT
  );

  const handleFavoritesButtonClick = () => {
    if (isNoAuth) {
      return navigate(AppRoute.Login);
    } else {
      if (pathname === AppRoute.Favorites) {
        changeFavoriteStatus();
      } else {
        favoriteStatusTimeout();
      }
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
