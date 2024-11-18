import UI from "../../components/ui-components";
import AuthHeaderLogout from "../../components/headers/AuthHeaderLogout.tsx";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import successDeleteProfileNotification from "../../components/Notifications/ProfileNotifications/successDeleteProfileNotification.tsx";
import failedToDeleteProfileNotification from "../../components/Notifications/ProfileNotifications/failedToDeleteProfileNotification.tsx";
const DashboardViewAccountProfile = () => {
  const { id } = useParams();
  const userId = localStorage.getItem("userdata");
  const [profileData, setProfileData] = useState<any>([]);

  const reactNav = useNavigate();

  useEffect(() => {
    document.title = "User Profile | Read Only";
    if (id === "null") {
      reactNav("/login");
    } else {
      (fetch as any)(`/dashboard/view-profile-data/${id}`, {
        method: "GET",
        credentials: "include",
      })
        .then((jsonResponse: any) => {
          if (!jsonResponse) {
            throw new Error("Failed to fetch data");
          }
          return jsonResponse.json();
        })
        .then((data: any) => {
          if (!data) {
            console.log("Failed");
          }
          setProfileData(data);
        })
        .catch((err: any) => {
          console.log("Error: ", err.message);
        });
    }
  }, []);

  const requestAccountDeletion = async (e: any) => {
    e.preventDefault();
    const confirmDeletion = prompt(`You are about to delete your profile. 
      \nType 'No' to cancel or 'Yes' to Delete`);
    if (confirmDeletion === "Yes") {
      const response = await fetch(`/dashboard/delete-profile-data/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        successDeleteProfileNotification();
        localStorage.clear();
        reactNav("/login");
      } else {
        failedToDeleteProfileNotification();
      }
    }
  };
  return (
    <>
      <AuthHeaderLogout />
      <UI.Section class_name={"view-account-profile"}>
        <UI.Section class_name={"task-container-account"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"My Profile - View Mode"}
            />
          </UI.Section>
          <UI.Section class_name={"data-container"}>
            {profileData.map((data: any) => {
              return (
                <>
                  {/*User name label */}
                  <UI.Section class_name={"data-item"}>
                    <UI.LabelText
                      id={"username-label"}
                      class_name={"username-label"}
                      text={"Username"}
                    />
                  </UI.Section>
                  {/*User name data */}
                  <UI.Section class_name={"data-item"}>
                    <UI.DataParagraph
                      id="username"
                      class_name="username"
                      text={data.username}
                    />
                  </UI.Section>
                  {/*Bio label */}
                  <UI.Section class_name={"data-item"}>
                    <UI.LabelText
                      id={"bio-label"}
                      class_name={"bio-label"}
                      text={"Bio"}
                    />
                  </UI.Section>
                  {/*Bio data */}
                  <UI.Section class_name={"data-item"}>
                    <textarea
                      id="bio"
                      disabled
                      className="bio"
                      value={data.biotext}
                    ></textarea>
                  </UI.Section>

                  {/*Email label*/}
                  <UI.Section class_name={"data-item"}>
                    <UI.LabelText
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
                      text={data.email}
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
                    <UI.DataParagraph
                      id="phonenumber"
                      class_name="phonenumber"
                      text={data.phonenumber}
                    />
                  </UI.Section>
                  <UI.Section class_name={"data-item"}>
                    <UI.Section class_name={"btn"}>
                      <UI.Route
                        class_name="back-to-multi-view-mode"
                        to="/dashboard/view-tasks"
                        text="Back to Multi View Mode"
                      />
                    </UI.Section>
                    <UI.Section class_name={"btn"}>
                      <UI.Route
                        class_name="edit-account-profile"
                        to={`/dashboard/update-my-account-profile/${userId}`}
                        text="Edit Profile"
                      />
                    </UI.Section>
                    <UI.Section class_name={"btn"}>
                      <form className="form" onSubmit={requestAccountDeletion}>
                        <input
                          type="submit"
                          className={"delete-account-profile"}
                          value={"Delete Profile"}
                        />
                      </form>
                    </UI.Section>
                  </UI.Section>
                </>
              );
            })}
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardViewAccountProfile;
