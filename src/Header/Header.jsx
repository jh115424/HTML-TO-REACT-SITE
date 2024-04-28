import "./Header.css";
function Header() {
  const headerNav = ["about us", "info", "support us"];

  return (
    <header>
      <h1>Fullmetal Alchemist </h1>

      {headerNav && (
        <nav className="top-nav">
          {headerNav.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
