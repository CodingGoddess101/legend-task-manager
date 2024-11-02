import { useEffect } from "react";
import UI from "../../components/ui-components";

const Dashboard_Delete_Account_Profile = () => {
  useEffect(() => {
    document.title = "Delete Profile";
  }, []);
  return (
    <UI.Section class_name={"user-profile delete-profile"}>
      <UI.Section class_name={"user-profile-primary-container"}>
        <UI.Section class_name={"user-profile-secondary-container"}>
          <UI.Section class_name={"heading container"}>
            <UI.Heading_One class_name={"heading-one"} text={"My Profile"} />
            <UI.Paragraph
              class_name={"paragraph"}
              text="Ensure your credentials below belongs to you and click 'Delete Account' to 
                delete your account information. This cannot be undone!"
            />
          </UI.Section>
          <form
            id="form"
            autoComplete="on"
            action="/dashboard/delete-my-account-profile/"
            method="DELETE"
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
                min={3}
                max={50}
                className="username-input"
                placeholder="Enter your name"
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
                min={3}
                max={50}
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
                min={3}
                max={50}
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
                min={8}
                className="password-input"
                id="password"
                name="password"
                placeholder="Enter password"
                max={20}
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="submit"
                className="submit-btn"
                value={"Delete My Account"}
              />
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </UI.Section>
  );
};

export default Dashboard_Delete_Account_Profile;
