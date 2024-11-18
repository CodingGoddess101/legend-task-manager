import { useState } from "react";
import UI from "../../components/ui-components";

const FindAccount = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const getUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const findUserAccount = async () => {
    try {
      if (username.length === 0 && email.length === 0) {
        alert("Input fields must not be empty!");
      }
    } catch (err: any) {
      console.warn(err.message);
    }
  };

  return (
    <>
      <UI.HeaderStandard />
      <UI.Section class_name={"account-recovery"}>
        <UI.Section class_name={"wrapper"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"Account Recovery"}
            />
            <UI.Paragraph
              class_name={"paragraph"}
              text={
                "Try to remember the credentials used to register your account on BLS"
              }
            />
          </UI.Section>
          <form
            id="form"
            autoComplete="off"
            action="/login/account-recovery"
            method="POST"
          >
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"username"}
                class_name={"username"}
                text={"Username"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="text"
                id="username"
                minLength={3}
                maxLength={50}
                onChange={getUsername}
                className="username-input"
                placeholder="Your username"
                name="username"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label htmlFor={"email"} class_name={"email"} text={"Email"} />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="email"
                id="email"
                minLength={3}
                maxLength={50}
                onChange={getEmail}
                className="email-input"
                placeholder="Your email address"
                name="email"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Route
                class_name="back-to-login"
                to="/login"
                text={"Back to Login"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="submit"
                className="submit-btn"
                value={"Find My Account"}
                onClick={findUserAccount}
              />
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default FindAccount;
