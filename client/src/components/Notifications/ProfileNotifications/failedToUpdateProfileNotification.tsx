const failedToUpdateProfileNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Profile Notification", {
      body: `Failed to update your profile information!`,
    });
  }
};

export default failedToUpdateProfileNotification;
