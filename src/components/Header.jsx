import NavMenu from "./NavMenu";
import './CSS-modules/header.css'

function Header() {
  return (
    <>
    <section className="page-header">
      <NavMenu />
      <h1 className="header-title">NC - NEWS</h1>
    </section>
    </>
  );
}

export default Header;
