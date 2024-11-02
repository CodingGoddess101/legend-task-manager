import UI from "../ui-components";
import "../../css/App.css";
const Header_Standard = () => {
  return (
    <header className="header standard">
      <UI.Heading_Two
        class_name={"heading-two"}
        children={
          <UI.Route
            class_name={"header-home-link"}
            to={"/"}
            text={"Bright Legend Systems"}
          />
        }
      />
    </header>
  );
};

export default Header_Standard;
