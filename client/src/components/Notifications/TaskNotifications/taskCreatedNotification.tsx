const createdTaskNotification = (taskname: string) => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Task ${taskname}, has been created!`,
    });
  }
};

export default createdTaskNotification;
