import { useEffect, useState } from "react";
import UI from "../../components/ui-components";
import createdTaskNotification from "../../components/Notifications/TaskNotifications/taskCreatedNotification";

const DashboardCreateNewTask = () => {
  useEffect(() => {
    document.title = "Add New Task";
  }, []);
  const [taskName, setTaskname] = useState<string>("");

  const processRequest = () => {
    createdTaskNotification(taskName);
  };

  const newTaskName = (e: any) => {
    setTaskname(e.target.value);
  };
  return (
    <>
      <UI.AuthHeaderLogout />
      <UI.Section class_name={"user-dashboard create-task"}>
        <UI.Section class_name={"task-container"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"New Task - Create Mode"}
            />
          </UI.Section>
          <form
            id="form"
            className="form"
            autoComplete="off"
            action="/dashboard/add-new-task"
            method="POST"
            onSubmit={processRequest}
          >
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"taskname"}
                class_name={"task-name-label"}
                text={"Task Name"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="text"
                id="taskname"
                minLength={3}
                maxLength={150}
                onChange={newTaskName}
                className="task-name-input"
                placeholder="Enter Task Name"
                name="taskname"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"taskdescription"}
                class_name={"task-description-label"}
                text={"Description"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <textarea
                id="taskdescription"
                minLength={3}
                maxLength={500}
                className="task-description-input"
                placeholder="Enter a description about the task..."
                name="taskdescription"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"taskstatus"}
                class_name={"task-status-label"}
                text={"Status"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Select
                id="taskstatus"
                class_name="task-status-input"
                name="taskstatus"
                required
              >
                <UI.Option
                  class_name={"select-option-status"}
                  value={"Pending"}
                  text={"Pending"}
                />
                <UI.Option
                  class_name={"select-option-status"}
                  value={"In Progress"}
                  text={"In Progress"}
                />
                <UI.Option
                  class_name={"select-option-status"}
                  value={"Completed"}
                  text={"Completed"}
                />
              </UI.Select>
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"tasktodaysdate"}
                class_name={"task-todays-date-label"}
                text={"Today's Date"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="date"
                className="task-todays-date-input"
                id="tasktodaysdate"
                name="tasktodaysdate"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Label
                htmlFor={"taskduedate"}
                class_name={"task-due-date-label"}
                text={"Due Date"}
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <input
                type="date"
                className="task-due-date-input"
                id="taskduedate"
                name="taskduedate"
                required
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Section class_name="btn-container">
                <UI.Route
                  to="/dashboard/view-tasks"
                  class_name="revert-submit"
                  text={"Go Back to Dashboard"}
                />
              </UI.Section>
              <UI.Section class_name="btn-container">
                <input
                  type="submit"
                  className="submit-btn create"
                  value={"Create Task"}
                />
              </UI.Section>
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardCreateNewTask;
