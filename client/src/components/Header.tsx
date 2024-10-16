import UI from "./ui-components";
import "../css/App.css";
const Header = () => {
  return (
    <header className="header">
      <UI.Heading_Two class_name={"heading-two"} text={"LMS"} />
    </header>
  );
};

export default Header;
