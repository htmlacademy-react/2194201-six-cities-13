import Logo from '../logo/logo';
import UserNav from '../user-nav/user-nav';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
