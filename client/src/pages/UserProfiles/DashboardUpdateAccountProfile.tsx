import { useEffect, useState } from "react";
import UI from "../../components/ui-components";
import { useParams } from "react-router-dom";
import successUpdateProfileNotification from "../../components/Notifications/ProfileNotifications/successUpdateProfileNotification";
import failedToUpdateProfileNotification from "../../components/Notifications/ProfileNotifications/failedToUpdateProfileNotification";

const DashboardUpdateAccountProfile = () => {
  useEffect(() => {
    document.title = "Edit Profile";
  }, []);

  const { id } = useParams();
  const [username, setUsername] = useState<string>("");
  const [bioText, setBioText] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const getUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const getBioText = (e: any) => {
    setBioText(e.target.value);
  };
  const getEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const getPhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const getNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };

  const processAccountData = async (e: any) => {
    try {
      e.preventDefault();
      const sendData = {
        username,
        biotext: bioText,
        email,
        phonenumber: phoneNumber,
        password,
        newpassword: newPassword,
      };

      if (
        username === "" &&
        bioText === "" &&
        email === "" &&
        phoneNumber === "" &&
        password === "" &&
        newPassword === ""
      ) {
        alert(
          "Fill in at least one field. Password fields are to be filled to update your password"
        );
      } else {
        const response = await fetch(`/dashboard/update-profile-data/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendData),
        });

        if (response.ok) {
          successUpdateProfileNotification();
        } else {
          failedToUpdateProfileNotification();
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  // action = "/dashboard/update-my-account-profile/";
  // method = "PUT";
  const userId = localStorage.getItem("userdata");
  return (
    <>
      <UI.AuthHeaderLogout />
      <UI.Section class_name={"update-account-profile"}>
        <UI.Section class_name={"task-container-account-update"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"My Profile - Update Mode"}
            />
          </UI.Section>
          <form id="form" className="form" onSubmit={processAccountData}>
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
                onChange={getUsername}
                maxLength={50}
                className="username-input"
                placeholder="Enter your name"
                name="username"
                autoComplete="off"
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
                onChange={getBioText}
                placeholder="Briefly describe your role and profession at the company."
                name="biotext"
                cols={10}
                rows={8}
                autoComplete="off"
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
                id="email"
                type="email"
                minLength={3}
                maxLength={50}
                onChange={getEmail}
                className="email-input"
                placeholder="Example: user@company.co.za"
                name="email"
                autoComplete="off"
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
                onChange={getPhoneNumber}
                className="phonenumber-input"
                placeholder="Enter your phone number"
                name="phonenumber"
                autoComplete="off"
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
                onChange={getPassword}
                className="password-input"
                id="password"
                name="password"
                placeholder="Enter password"
                autoComplete="off"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"newpassword"}
                class_name={"password-label"}
                text={"New Password"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="password"
                minLength={5}
                maxLength={30}
                onChange={getNewPassword}
                className="password-input"
                id="newpassword"
                name="newpassword"
                placeholder="Enter new password"
                autoComplete="off"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Section class_name={"btn"}>
                <UI.Route
                  class_name="back-to-profile-view-mode"
                  to={`/dashboard/view-my-account-profile/${userId}`}
                  text="View Profile"
                />
              </UI.Section>
              <UI.Section class_name={"btn"}>
                <input
                  type="submit"
                  className="update-route"
                  value="Update Profile"
                />
              </UI.Section>
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardUpdateAccountProfile;
