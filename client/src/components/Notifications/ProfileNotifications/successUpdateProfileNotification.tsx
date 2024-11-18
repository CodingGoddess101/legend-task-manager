const successUpdateProfileNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Profile Notification", {
      body: `Your profile information has been updated!`,
    });
  }
};

export default successUpdateProfileNotification;
