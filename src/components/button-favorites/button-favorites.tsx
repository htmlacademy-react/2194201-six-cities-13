import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { postFavoriteStatusAction } from '../../store/api-actions';

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
  const authorizationStatus = useAppSelector(selectAuthStatus);

  const buttonActiveClass = `${className}__bookmark-button--active`;
  const status = Number(!isFavorite);

  const handleFavoritesButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    } else {
      dispatch(
        postFavoriteStatusAction({
          offerId,
          status,
        })
      );
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
