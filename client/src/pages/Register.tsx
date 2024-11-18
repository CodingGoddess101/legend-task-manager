import { useEffect } from "react";
import UI from "../components/ui-components";

const Register = () => {
  useEffect(() => {
    document.title = "Registration";
  }, []);
  return (
    <>
      <UI.HeaderStandard />
      <UI.Section class_name={"register"}>
        <UI.Section class_name={"wrapper"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne class_name={"heading-one"} text={"Registration"} />
            <UI.Paragraph
              class_name={"paragraph"}
              text={"Enter your credentials below to create your account"}
            />
          </UI.Section>
          <form id="form" autoComplete="off" action="/register" method="POST">
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
                className="username-input"
                placeholder="Enter your name"
                name="username"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"biotext"}
                class_name={"biotext"}
                text={"Bio"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <textarea
                id="biotext"
                minLength={5}
                maxLength={500}
                className="biotext-input"
                placeholder="Briefly describe your role and profession at the company."
                name="biotext"
                required
                cols={10}
                rows={8}
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
                className="email-input"
                placeholder="Example: user@company.co.za"
                name="email"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"phonenumber"}
                class_name={"phonenumber"}
                text={"Phone"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="text"
                id="phonenumber"
                minLength={10}
                maxLength={20}
                className="phonenumber-input"
                placeholder="Enter your phone number"
                name="phonenumber"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"password"}
                class_name={"password"}
                text={"Password"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="password"
                minLength={5}
                maxLength={30}
                className="password-input"
                id="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="submit"
                className="submit-btn"
                value={"Create Account"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Paragraph
                class_name={"paragraph"}
                text={"Already have an account? "}
              />
              <UI.Route
                class_name={"register-route"}
                to={"/login"}
                text={"Log in"}
              />
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Register;
