import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectUser } from '../../store/user-process/selectors';
import { selectFavorites } from '../../store/favorites-data/selectors';
import { AppRoute } from '../../constants';

function ProfileLink(): JSX.Element {
  const user = useAppSelector(selectUser);
  const favorites = useAppSelector(selectFavorites);

  return (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.Favorites}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper" />
      <span className="header__user-name user__name">{user?.email}</span>
      <span className="header__favorite-count">{favorites.length}</span>
    </Link>
  );
}

export default ProfileLink;
