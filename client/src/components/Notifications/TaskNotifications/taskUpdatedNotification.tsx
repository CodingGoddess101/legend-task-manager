const updatedTaskNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Your task has been updated!`,
    });
  }
};

export default updatedTaskNotification;
