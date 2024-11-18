import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import UI from "../../components/ui-components";
import formatInputDate from "../../components/DateFormat";
import deletedTaskNotification from "../../components/Notifications/TaskNotifications/taskDeletedNotification";
import jsPDF from "jspdf";

const DashboardViewSingleTask = () => {
  const { id } = useParams();
  const [viewedTask, setViewedTask] = useState<any>([]);
  const [notificationData, setNotificationData] = useState<any>([]);
  const reactNav = useNavigate();
  const setTaskStorage = () => {
    if (!localStorage.getItem("taskid")) {
      localStorage.setItem("taskid", JSON.stringify(id));
    }
  };
  setTaskStorage();

  useEffect(() => {
    try {
      const fetchViewedTask = async () => {
        document.title = "View Profile";
        if (!localStorage.getItem("taskid")) {
          alert(
            "taskid not found, redirecting to Multi View Mode and try again!"
          );
          window.location.href = "/dashboard/view-tasks";
        } else {
          const taskId = localStorage.getItem("taskid");
          (fetch as any)(`/dashboard/view-single-task/${taskId}`, {
            credentials: "include",
            method: "GET",
          })
            .then((jsonResponse: any) => {
              if (!jsonResponse) {
                throw new Error("Single Task fetch error!");
              }
              return jsonResponse.json();
            })
            .then((response: any) => {
              if (!response) {
                console.warn("Failed to retrieve single task ");
              }
              setViewedTask(response);
              setNotificationData(response);
            });
        }
      };
      fetchViewedTask();
    } catch (err: any) {
      console.warn("Issue(s): ", err.message);
    }
  }, []);

  const requestTaskDeletion = async (e: any) => {
    try {
      e.preventDefault();
      notificationData.map((data: any) => {
        if (!data) {
          console.log("Task does not exist");
        }
        console.log(data.taskname);
        localStorage.setItem("deletedTask", data.taskname);
      });

      const response = await (fetch as any)(`/dashboard/delete-task/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        if (localStorage.getItem("deletedTask")) {
          const deletedTask: any = localStorage.getItem("deletedTask");
          deletedTaskNotification(deletedTask);
          localStorage.removeItem("deletedTask");
        }
        reactNav("/dashboard/view-tasks");
      } else {
        alert("Failed to Delete Task!");
      }
    } catch (err: any) {
      console.log("fetch issue(s): ", err.message);
    }
  };

  const exportTaskToPDF = () => {
    const tasksDoc = new jsPDF();

    tasksDoc.setFontSize(18);
    tasksDoc.text("Exported Task Report", 20, 20);

    tasksDoc.setFontSize(14);
    tasksDoc.text(`Document created on ${formatInputDate(new Date())}`, 20, 40);

    let yPosition = 60;

    viewedTask.forEach((task: any) => {
      if (yPosition > 280) {
        tasksDoc.addPage();
        yPosition = 20;
      }

      tasksDoc.setFontSize(12);
      tasksDoc.text(`Task Id: ${task._id}`, 20, yPosition);
      yPosition += 10;

      tasksDoc.text(`Task Name: ${task.taskname}`, 20, yPosition);
      yPosition += 10;

      tasksDoc.setFontSize(12);
      tasksDoc.text(`Description: ${task.taskdescription}`, 20, yPosition);
      yPosition += 10;

      tasksDoc.text(`Status: ${task.taskstatus}`, 20, yPosition);
      yPosition += 10;

      tasksDoc.text(`Date created: ${task.tasktodaysdate}`, 20, yPosition);
      yPosition += 10;

      tasksDoc.text(`Due Date: ${task.taskduedate}`, 20, yPosition);
      yPosition += 30;
    });

    //save exported tasks to pdf document
    tasksDoc.save(`Tasks_${formatInputDate(new Date())}`);
  };

  const generateSingleViewPDF = async () => {
    exportTaskToPDF();
  };

  return (
    <>
      <UI.AuthHeaderLogout />
      <UI.Section class_name={"user-dashboard view-task"}>
        <UI.Section class_name={"table-wrapper"}>
          <UI.Div class_name={"task-management-heading-2nd-container"}>
            <Link
              className={"to-multi-view-mode"}
              to="/dashboard/view-tasks"
              onClick={() => localStorage.removeItem("taskid")}
            >
              Back to Multi View Mode
            </Link>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"Active Task - Single View Mode"}
            />
          </UI.Div>
          <UI.Section class_name={"text-route container"}>
            <UI.Section class_name={"text-route"}>
              <UI.HeadingTwo
                class_name={"heading-two"}
                children={"Task Manager"}
              />
            </UI.Section>
            <UI.Section class_name={"pdf-button container"}>
              <UI.ButtonPDF
                class_name={"create-pdf"}
                onClick={generateSingleViewPDF}
                text={"Export Task to PDF"}
              />
            </UI.Section>
          </UI.Section>
          <UI.Section class_name="table-container">
            <table className="table">
              <thead className="table-heading">
                <UI.TableRow class_name={"row"}>
                  <UI.TableHeading
                    class_name={"row heading"}
                    text={"Task Name"}
                  />
                  <UI.TableHeading
                    class_name={"row heading"}
                    text={"Description"}
                  />
                  <UI.TableHeading class_name={"row heading"} text={"Status"} />
                  <UI.TableHeading
                    class_name={"row heading"}
                    text={"Date Created"}
                  />
                  <UI.TableHeading
                    class_name={"row heading"}
                    text={"Due Date"}
                  />
                  <UI.TableHeading
                    class_name={"row heading"}
                    text={"Actions"}
                  />
                </UI.TableRow>
              </thead>
              <tbody className="table-body">
                {viewedTask.map((taskdata: any) => {
                  const userId = localStorage.getItem("userdata");
                  return (
                    <tr className={"row"}>
                      <UI.TableData
                        class_name={"row data"}
                        children={taskdata.taskname}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={taskdata.taskdescription}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={taskdata.taskstatus}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={formatInputDate(
                          new Date(taskdata.tasktodaysdate)
                        )}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={formatInputDate(
                          new Date(taskdata.taskduedate)
                        )}
                      />

                      {userId === taskdata.taskuserId ? (
                        <UI.TableData
                          class_name={"row data"}
                          children={
                            <>
                              <UI.Route
                                class_name={"btn-view"}
                                text={"Edit"}
                                to={`/dashboard/update-task/${taskdata._id}`}
                              />
                              {" | "}
                              <form
                                style={{ display: "inline" }}
                                className="form"
                                onSubmit={requestTaskDeletion}
                              >
                                <input
                                  type="submit"
                                  className={"delete"}
                                  value={"Delete"}
                                />
                              </form>
                            </>
                          }
                        />
                      ) : (
                        "Read only"
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardViewSingleTask;
