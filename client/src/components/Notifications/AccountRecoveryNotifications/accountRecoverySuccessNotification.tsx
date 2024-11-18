const accountRecoverySuccessNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Account Recovery Notification", {
      body: "Your account's password have been updated!",
    });
  }
};

export default accountRecoverySuccessNotification;
