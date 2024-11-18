const failedToUpdateTaskNotification = (taskname: string) => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Failed to update task: ${taskname}!`,
    });
  }
};

export default failedToUpdateTaskNotification;
