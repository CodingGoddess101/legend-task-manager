import Props from "../ComponentProps";
import UI from "../ui-components";
import setting from "../../assets/gear-solid.svg";

const Auth_Header_Logout = ({}: Props) => {
  const toggle_Drop_Down = () => {
    const drop_down_one = document.getElementById("drop-down one");
    if (!drop_down_one) {
      console.log("nothing is captured");
    } else {
      drop_down_one.classList.toggle("visible");
    }
  };
  return (
    <header className="header two authorized">
      <UI.Heading_Two
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
            onClick={toggle_Drop_Down}
            alt="Gear Setting icon to open drop down"
          />
        </div>
        <UI.Section_With_Id id="drop-down one" class_name="drop-down one">
          <form
            id="log-out-form"
            className="log-out-form one"
            action="/user-dashboard/auth-log-out"
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
        </UI.Section_With_Id>
        <UI.Section_With_Id id="drop-down two" class_name="drop-down two">
          <form
            id="log-out-form one"
            className="log-out-form two"
            action="/user-dashboard/auth-log-out"
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
        </UI.Section_With_Id>
      </UI.Section>
    </header>
  );
};

export default Auth_Header_Logout;
