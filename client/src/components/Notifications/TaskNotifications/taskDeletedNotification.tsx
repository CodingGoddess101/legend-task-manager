const deletedTaskNotification = (taskname: string) => {
  if (Notification.permission === "granted") {
    new Notification("Task Notification", {
      body: `Task ${taskname}, has been deleted!`,
    });
  }
};

export default deletedTaskNotification;
