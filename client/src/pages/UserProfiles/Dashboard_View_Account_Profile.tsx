import { useEffect } from "react";
import UI from "../../components/ui-components";
import Auth_Header_Logout from "../../components/headers/Auth_Header_Logout";

const Dashboard_View_Account_Profile = () => {
  useEffect(() => {
    document.title = "View Profile";
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
      <Auth_Header_Logout />
      <UI.Section class_name={"view-account-profile"}>
        <UI.Section class_name={"task-container-account"}>
          <UI.Section class_name={"heading container"}>
            <UI.Heading_One
              class_name={"heading-one"}
              text={"My Profile - View Mode"}
            />
          </UI.Section>
          <UI.Section class_name={"data-container"}>
            {/*User name label */}
            <UI.Section class_name={"data-item"}>
              <UI.Label_Text
                id={"username-label"}
                class_name={"username-label"}
                text={"Username"}
              />
            </UI.Section>
            {/*User name data */}
            <UI.Section class_name={"data-item"}>
              <UI.Data_Paragraph
                id="username"
                class_name="username"
                text="Christeen"
              />
            </UI.Section>
            {/*Bio label */}
            <UI.Section class_name={"data-item"}>
              <UI.Label_Text
                id={"bio-label"}
                class_name={"bio-label"}
                text={"Bio"}
              />
            </UI.Section>
            {/*Bio data */}
            <UI.Section class_name={"data-item"}>
              <textarea id="bio" className="bio" /* disabled*/></textarea>
            </UI.Section>

            {/*Email label*/}
            <UI.Section class_name={"data-item"}>
              <UI.Label_Text
                id={"email-label"}
                class_name={"email-label"}
                text={"Email"}
              />
            </UI.Section>
            {/*Email data */}
            <UI.Section class_name={"data-item"}>
              <UI.Paragraph
                id="email"
                class_name={"email"}
                text={"user@company.co.za"}
              />
            </UI.Section>

            {/* user cell number label */}
            <UI.Section class_name={"data-item"}>
              <UI.Paragraph
                id={"phonenumber-label"}
                class_name={"phonenumber-label"}
                text={"Number"}
              />
            </UI.Section>
            {/* user cell number label */}
            <UI.Section class_name={"data-item"}>
              <UI.Data_Paragraph
                id="phonenumber"
                class_name="phonenumber"
                text={"No: +12345678901"}
              />
            </UI.Section>
            <UI.Section class_name={"data-item"}>
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="back-to-multi-view-mode"
                  to="/user-dashboard/view-tasks"
                  text="Back to Multi View Mode"
                />
              </UI.Section>
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="edit-account-profile"
                  to="/user-dashboard/update-my-account-profile"
                  text="Edit Profile"
                />
              </UI.Section>
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="delete-account-profile"
                  to="/user-dashboard/delete-account-profile"
                  text="Delete Profile"
                />
                {/* This link will lead to a popup window confirming account
                deletion */}
              </UI.Section>
            </UI.Section>
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Dashboard_View_Account_Profile;
