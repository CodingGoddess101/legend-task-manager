const failedToCreateTaskNotification = (taskname: string) => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Failed to create task: ${taskname}!`,
    });
  }
};

export default failedToCreateTaskNotification;
