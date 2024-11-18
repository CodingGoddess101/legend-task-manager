import { useEffect, useState } from "react";
import UI from "../../components/ui-components";
import { useNavigate, useParams } from "react-router-dom";
import formatInputDate from "../../components/DateFormat";
import updatedTaskNotification from "../../components/Notifications/TaskNotifications/taskUpdatedNotification";
import failedToUpdateTaskNotification from "../../components/Notifications/TaskNotifications/failedToUpdateTaskNotification";

const DashboardUpdateSingleTask = () => {
  const { id } = useParams();
  const reactNav = useNavigate();
  const [updatedTaskName, setUpdatedTaskName] = useState<string>("");

  const [taskName, setTaskName] = useState<string>("");
  const updateInput1 = (e: any) => {
    setTaskName(e.target.value);
    setUpdatedTaskName(e.target.value);
  };

  const [taskDescription, setTaskDescription] = useState<string>("");
  const updateInput2 = (e: any) => {
    setTaskDescription(e.target.value);
  };

  const [taskStatus, setTaskStatus] = useState<any>("Pending");
  const updateInput3 = (e: any) => {
    setTaskStatus(e.target.value);
  };

  const [taskTodaysDate, setTodaysDate] = useState<any>(
    formatInputDate(new Date())
  );
  const updateInput4 = (e: any) => {
    setTodaysDate(e.target.value);
  };

  const [taskDueDate, settaskDueDate] = useState<any>(
    formatInputDate(new Date())
  );
  const updateInput5 = (e: any) => {
    settaskDueDate(e.target.value);
  };

  const updateTaskData = async (e: any) => {
    e.preventDefault();
    const taskData = {
      taskname: taskName,
      taskdescription: taskDescription,
      taskstatus: taskStatus,
      tasktodaysdate: taskTodaysDate,
      taskduedate: taskDueDate,
    };
    if (
      taskName === "" &&
      taskDescription === "" &&
      taskStatus === "" &&
      taskTodaysDate === "" &&
      taskDueDate === ""
    ) {
      alert("Fill in at least one field to update the task.");
    }
    const response = await fetch(`/dashboard/update-task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (response.ok) {
      updatedTaskNotification();
      reactNav("/dashboard/view-tasks");
    } else {
      failedToUpdateTaskNotification(updatedTaskName);
    }
  };
  useEffect(() => {
    document.title = "Update Single Task";
  }, []);
  return (
    <>
      <UI.AuthHeaderLogout />
      <UI.Section class_name={"user-dashboard update-task"}>
        <UI.Section class_name={"task-container"}>
          <UI.Section class_name={"heading container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"Active Task - Update Mode"}
            />
          </UI.Section>
          <form
            id="form"
            className="form"
            autoComplete="off"
            onSubmit={updateTaskData}
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
                id="taskname"
                type="text"
                minLength={3}
                maxLength={150}
                value={taskName}
                onChange={updateInput1}
                className="task-name-input"
                placeholder="Change task name"
                name="taskname"
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
                value={taskDescription}
                onChange={updateInput2}
                className="task-description-input"
                placeholder="Update the description about the task..."
                name="taskdescription"
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
                value={taskStatus}
                onChange={updateInput3}
                name="taskstatus"
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
                id="tasktodaysdate"
                type="date"
                className="task-todays-date-input"
                value={taskTodaysDate}
                onChange={updateInput4}
                name="tasktodaysdate"
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
                id="taskduedate"
                type="date"
                className="task-due-date-input"
                value={taskDueDate}
                onChange={updateInput5}
                name="taskduedate"
              />
            </UI.Section>
            <UI.Section class_name={"form-field-row"}>
              <UI.Section class_name="btn-container">
                <UI.Route
                  to={`/dashboard/view-task/${id}`}
                  class_name="revert-submit"
                  text={"Back to Single View Mode"}
                />
              </UI.Section>
              <UI.Section class_name="btn-container">
                <input
                  type="submit"
                  className="submit-btn create"
                  value={"Update Task"}
                />
              </UI.Section>
            </UI.Section>
          </form>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardUpdateSingleTask;
