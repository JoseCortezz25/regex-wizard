import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="" className="nav__logo">
            <img src="/wizard.png" alt="A stunning logo" />
            <p>RegEx Wizard</p>
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
