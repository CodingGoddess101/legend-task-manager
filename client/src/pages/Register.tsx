import UI from "../components/ui-components";

const Register = () => {
  return (
    <UI.Section class_name={"register"}>
      <UI.Section class_name={"wrapper"}>
        <UI.Section class_name={"heading container"}>
          <UI.Heading_One class_name={"heading-one"} text={"Registration"} />
          <UI.Paragraph
            class_name={"paragraph"}
            text={"Enter your credentials below to create your account"}
          />
        </UI.Section>
        <form id="form" autoComplete="false" action="/login" method="POST">
          <UI.Section class_name={"form-field-row"}>
            <UI.Label htmlFor={"email"} class_name={"email"} text={"Email"} />
          </UI.Section>
          <UI.Section class_name={"form-field-row"}>
            <input
              type="email"
              id="email"
              min={3}
              max={50}
              className="email-input"
              placeholder="Example: user@company.co.za"
              name="email"
              required
              autoComplete="false"
              pattern="[a-zA-Z0-9.]+@gmail\.com$"
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
              min={8}
              className="password-input"
              id="password"
              name="password"
              placeholder="Enter password"
              max={20}
              required
              pattern="[a-zA-Z0-9_$()]"
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
            <input
              type="submit"
              className="submit-btn"
              value={"Sign up using Google"}
            />
          </UI.Section>
          <UI.Section class_name={"form-field-row"}>
            <UI.Paragraph
              class_name={"paragraph"}
              text={"Already have an account? "}
            />
            <UI.Route
              class_name={"login-route"}
              to={"/login"}
              text={"Log in"}
            />
          </UI.Section>
        </form>
      </UI.Section>
    </UI.Section>
  );
};

export default Register;
