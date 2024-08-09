import HomeButton from "./HomeButton";
import "./CSS-modules/header.css";

function Header({ setTopic, setSort }) {
  return (
    <>
      <section className="page-header">
        <HomeButton setTopic={setTopic} setSort={setSort} />
        <h1 className="header-title">NC - NEWS</h1>
      </section>
    </>
  );
}

export default Header;
