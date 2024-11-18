import Props from "../ComponentProps";
import UI from "../ui-components";
import setting from "../../assets/gear-solid.svg";
import { Link } from "react-router-dom";
const AuthHeaderProfileAndLogout = ({}: Props) => {
  //A feature that get activated on the first three media queries
  const toggleDropDown = () => {
    const dropdownone = document.getElementById("drop-down one");
    if (!dropdownone) {
      console.log("nothing is captured");
    } else {
      dropdownone.classList.toggle("visible");
    }
  };
  const userId = localStorage.getItem("userdata");
  const profileRoute = () => {
    if (!userId) {
      alert("Unable to view user Profile, id is missing");
    }
  };
  const clearData = () => {
    const userdata = localStorage.getItem("userdata");
    if (userdata) {
      localStorage.removeItem("userdata");
    }
  };
  return (
    <header className="header authorized">
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
          <UI.Button class_name="user-profile nav-button one">
            <Link
              className="user-profile-link one"
              to={`/dashboard/view-my-account-profile/${userId}`}
              onClick={() => profileRoute()}
            >
              View My Profile
            </Link>
          </UI.Button>
          <form
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
                onClick={() => localStorage.clear()}
              />
            </UI.Button>
          </form>
        </UI.SectionWithId>
        <UI.SectionWithId id="drop-down two" class_name="drop-down two">
          <UI.Button class_name="user-profile nav-button two">
            <UI.Route
              class_name="user-profile-link two"
              to={`/dashboard/view-my-account-profile/${userId}`}
              text="View My Profile"
            />
          </UI.Button>
          <form
            id="log-out-form"
            className="log-out-form two"
            action="/dashboard/auth-log-out"
            autoComplete="off"
            method="POST"
            onSubmit={clearData}
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

export default AuthHeaderProfileAndLogout;
