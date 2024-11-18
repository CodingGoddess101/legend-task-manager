import Props from "../ComponentProps";
import UI from "../ui-components";
import setting from "../../assets/gear-solid.svg";

const AuthHeaderLogout = ({}: Props) => {
  const toggleDropDown = () => {
    const dropdownone = document.getElementById("drop-down one");
    if (!dropdownone) {
      console.log("nothing is captured");
    } else {
      dropdownone.classList.toggle("visible");
    }
  };
  const handleSubmit = () => {
    localStorage.clear();
  };
  return (
    <header className="header two authorized">
      <UI.HeadingTwo
        class_name={"heading-two"}
        children={
          <UI.Paragraph
            class_name={"bls-text"}
            to={"/"}
            text={"Bright Legend Systems"}
          />
        }
      />
      <UI.Section class_name="nav-container">
        <div className="gear-icon container">
          <img
            className="gear-icon"
            src={setting}
            onClick={toggleDropDown}
            alt="Gear Setting icon to open drop down"
          />
        </div>
        <UI.SectionWithId id="drop-down one" class_name="drop-down one">
          <form
            onSubmit={handleSubmit}
            id="log-out-form"
            className="log-out-form one"
            action="/dashboard/auth-log-out"
            autoComplete="off"
            method="POST"
          >
            <UI.Button class_name="logout nav-button one">
              <input
                className="submit-log-out one"
                type="submit"
                value="Log Out"
              />
            </UI.Button>
          </form>
        </UI.SectionWithId>
        <UI.SectionWithId id="drop-down two" class_name="drop-down two">
          <form
            onSubmit={handleSubmit}
            id="log-out-form one"
            className="log-out-form two"
            action="/dashboard/auth-log-out"
            autoComplete="off"
            method="POST"
          >
            <UI.Button class_name="logout nav-button two">
              <input
                className="submit-log-out two"
                type="submit"
                value="Log Out"
              />
            </UI.Button>
          </form>
        </UI.SectionWithId>
      </UI.Section>
    </header>
  );
};

export default AuthHeaderLogout;
