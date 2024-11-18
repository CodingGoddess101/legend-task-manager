const failedToDeleteProfileNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Profile Notification", {
      body: `Failed to delete your profile!`,
    });
  }
};

export default failedToDeleteProfileNotification;
