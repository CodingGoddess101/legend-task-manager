const failedToDeleteTaskNotification = (taskname: string) => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Failed to delete task: ${taskname}!`,
    });
  }
};

export default failedToDeleteTaskNotification;
