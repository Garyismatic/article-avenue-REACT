import HomeButton from "./HomeButton";
import "./CSS-modules/header.css";

function Header({ setTopic }) {
  return (
    <>
      <section className="page-header">
        <HomeButton setTopic={setTopic} />
        <h1 className="header-title">NC - NEWS</h1>
      </section>
    </>
  );
}

export default Header;
