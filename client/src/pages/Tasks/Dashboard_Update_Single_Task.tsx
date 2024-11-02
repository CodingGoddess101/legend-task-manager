import UI from "../../components/ui-components";

const Dashboard_Update_Single_Task = () => {
  return (
    <>
      <UI.Auth_Header_Logout />

      <UI.Section class_name={"user-dashboard update-task"}>
        <UI.Section class_name={"task-container"}>
          <UI.Section class_name={"heading container"}>
            <UI.Heading_One
              class_name={"heading-one"}
              text={"Active Task - Update Mode"}
            />
          </UI.Section>
          <form
            id="form"
            className="form"
            autoComplete="off"
            action="/user-dashboard/update-task"
            method="PUT"
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
                minLength={10}
                maxLength={150}
                className="task-name-input"
                placeholder="Change task name"
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
                placeholder="Update the description about the task..."
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
                  to="/user-dashboard/view-task"
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

export default Dashboard_Update_Single_Task;
