const accountRecoveryFailedNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Account Recovery Notification", {
      body: "Failed to update your account's password!",
    });
  }
};

export default accountRecoveryFailedNotification;
