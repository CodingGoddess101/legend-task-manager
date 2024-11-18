const successDeleteProfileNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Profile Notification", {
      body: `Your profile has been deleted!`,
    });
  }
};

export default successDeleteProfileNotification;
