import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';

type HeaderProps = {
  isUserNav?: boolean;
};

function Header({ isUserNav = false }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {isUserNav && <UserNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
