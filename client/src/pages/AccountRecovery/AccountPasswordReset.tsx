import { useEffect, useState } from "react";
import UI from "../../components/ui-components";
import { useNavigate, useParams } from "react-router-dom";
import accountRecoverySuccessNotification from "../../components/Notifications/AccountRecoveryNotifications/accountRecoverySuccessNotification";
import accountRecoveryFailedNotification from "../../components/Notifications/AccountRecoveryNotifications/accountRecoveryFailedNnotification";

const AccountPasswordReset = () => {
  const { id } = useParams();
  const [newPassword, setNewPassword] = useState<string>("");
  const newUserCredential = {
    password: newPassword,
  };
  const reactNav = useNavigate();

  const processSubmit = async (e: any) => {
    e.preventDefault();
    const response = await (fetch as any)(`/account-update-password/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserCredential),
    });

    if (response.ok) {
      accountRecoverySuccessNotification();
      reactNav("/login");
    } else {
      accountRecoveryFailedNotification();
    }
  };
  const getNewPassword = (e: any) => {
    setNewPassword(e.target.value);
  };
  useEffect(() => {
    document.title = "Account Password Reset";
  }, []);
  return (
    <>
      <UI.HeaderStandard />
      <UI.Section class_name={"password-reset"}>
        <UI.Section class_name={"wrapper"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne class_name={"heading-one"} text={"Password Reset"} />
          </UI.Section>
          <form id="form" autoComplete="off" onSubmit={processSubmit}>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"password"}
                class_name={"password"}
                text={"New Password"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="password"
                minLength={5}
                maxLength={20}
                className="password-input"
                onChange={getNewPassword}
                id="password"
                name="password"
                placeholder="Enter new password"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="submit"
                className="submit-btn"
                value={"Update Password"}
              />
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default AccountPasswordReset;
