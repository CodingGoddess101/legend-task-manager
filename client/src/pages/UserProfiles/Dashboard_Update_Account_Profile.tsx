import { useEffect } from "react";
import UI from "../../components/ui-components";

const Dashboard_Update_Account_Profile = () => {
  useEffect(() => {
    document.title = "Edit Profile";
    setTimeout(() => {
      // fetch("http://localhost:5500/view-profile-info", {
      //   credentials: "include",
      //   method: "GET",
      // })
      //   .then((json_response: any) => json_response.json())
      //   .then((response: any) => {
      //     setUserAccountInfo(response);
      //   })
      //   .catch(() => console.warn("Username not found"));
    }, 1500);
  }, []);
  return (
    <>
      <UI.Auth_Header_Logout />
      <UI.Section class_name={"update-account-profile"}>
        <UI.Section class_name={"task-container-account-update"}>
          <UI.Section class_name={"heading container"}>
            <UI.Heading_One
              class_name={"heading-one"}
              text={"My Profile - Update Mode"}
            />
          </UI.Section>
          <form
            id="form"
            autoComplete="on"
            className="form"
            action="/dashboard/update-my-account-profile/"
            method="PUT"
          >
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"username"}
                class_name={"username-label"}
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
                autoComplete="false"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"biotext"}
                class_name={"biotext-label"}
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
              <UI.Label
                htmlFor={"email"}
                class_name={"email-label"}
                text={"Email"}
              />
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
                autoComplete="false"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"phonenumber"}
                class_name={"phonenumber-label"}
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
                autoComplete="false"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"password"}
                class_name={"password-label"}
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
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="back-to-profile-view-mode"
                  to="/user-dashboard/view-my-account-profile"
                  text="View Profile"
                />
              </UI.Section>
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="update-route"
                  to="/user-dashboard/update-my-account-profile"
                  text="Update Profile"
                />
                {/* This link will lead to a popup window confirming account
                deletion */}
              </UI.Section>
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Dashboard_Update_Account_Profile;
