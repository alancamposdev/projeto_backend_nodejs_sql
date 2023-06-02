import "../assets/css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src="../../public/imgs/logo.png" alt="logo" />
        <span>CPT</span>
      </div>
      <nav className="header_nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cadastro">Cadastro</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;