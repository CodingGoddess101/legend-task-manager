import { useEffect } from "react";
import UI from "../components/ui-components";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <>
      <UI.HeaderStandard />
      <UI.Section class_name={"login"}>
        <UI.Section class_name={"wrapper"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne class_name={"heading-one"} text={"Login"} />
            <UI.Paragraph
              class_name={"paragraph"}
              text={"Enter your credentials below to login to your account"}
            />
          </UI.Section>
          <form id="form" autoComplete="off" action="/login" method="POST">
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
                htmlFor={"password"}
                class_name={"password"}
                text={"Password"}
              />
              <UI.Route
                class_name={"forgot-password"}
                to="/login/account-recovery"
                text={"Forgot Password?"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="password"
                minLength={5}
                maxLength={20}
                className="password-input"
                id="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input type="submit" className="submit-btn" value={"Log in"} />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Paragraph
                class_name={"paragraph"}
                text={"Haven't signed up yet? "}
              />
              <UI.Route
                class_name={"login-route"}
                to={"/register"}
                text={"Sign Up"}
              />
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Login;
