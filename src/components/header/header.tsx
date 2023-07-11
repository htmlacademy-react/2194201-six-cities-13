import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';

type HeaderProps = {
  userNav: boolean;
};

function Header({ userNav }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {userNav && <UserNav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
