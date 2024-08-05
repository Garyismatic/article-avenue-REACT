import NavMenu from "./NavMenu";
import './components-CSS/header.css'

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
