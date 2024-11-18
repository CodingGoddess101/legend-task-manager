import { useEffect, useState } from "react";
import UI from "../components/ui-components";
import { Link } from "react-router-dom";
import formatInputDate from "../components/DateFormat";
import jsPDF from "jspdf";
// import { useNavigate } from "react-router-dom";
const DashboardViewAllTasks = () => {
  const [userAccountInfo, setUserAccountInfo] = useState<any>([]);
  const [tasks, setTasks] = useState<any>([]);
  // const reactNav = useNavigate();
  useEffect(() => {
    try {
      document.title = "My Dashboard";
      const fetchUserData = async () => {
        (fetch as any)("/dashboard/my-info", {
          credentials: "include",
          method: "GET",
        })
          .then((jsonResponse: any) => {
            if (!jsonResponse.ok) {
              throw new Error("Response error");
            }
            return jsonResponse.json();
          })
          .then((response: any) => {
            if (!response) {
              console.warn("Failed to assign user info");
            }
            setUserAccountInfo(response);
          })
          .catch(() => {
            alert("looking for credentials...");
            setTimeout(() => {
              if (!localStorage.getItem("userdata")) {
                alert(`Failed to find credentials!`);
                localStorage.clear();
                window.location.href = "/redirect";
              }
            }, 3000);
          });
      };
      const fetchTaskData = async () => {
        (fetch as any)("/dashboard/my-tasks", {
          credentials: "include",
          method: "GET",
        })
          .then((jsonResponse: any) => {
            if (!jsonResponse.ok) {
              throw new Error("Task Response error");
            }
            return jsonResponse.json();
          })
          .then((response: any) => {
            if (!response) {
              console.warn("Failed to assign task info");
            }
            setTasks(response);
          })
          .catch((err: any) => console.warn("Tasks not found: ", err.message));
        //if verification succeeds!
      };
      fetchUserData();
      fetchTaskData();
    } catch (err: any) {
      console.warn(err.message);
    }
  }, []);

  const fetchTasks = async () => {
    (fetch as any)("/dashboard/my-tasks", {
      credentials: "include",
      method: "GET",
    })
      .then((jsonResponse: any) => {
        if (!jsonResponse.ok) {
          throw new Error("Task Response error");
        }
        return jsonResponse.json();
      })
      .then((response: any) => {
        if (!response) {
          console.warn("Failed to assign task info");
        }
        setTasks(response);
      })
      .catch((err: any) => console.warn("Tasks not found: ", err.message));
  };

  const credentialsFailsafe = () => {
    if (!localStorage.getItem("userdata") && userAccountInfo !== null) {
      userAccountInfo.map((info: any) => {
        localStorage.setItem("userdata", info._id);
      });
    }
    localStorage.getItem("userdata");
  };
  credentialsFailsafe();

  const exportTasksToPDF = (tasks_: any) => {
    if (tasks.length !== 0) {
      const tasksDoc = new jsPDF();

      tasksDoc.setFontSize(18);
      tasksDoc.text("Exported Tasks Report", 20, 20);

      tasksDoc.setFontSize(14);
      tasksDoc.text(
        `Document created on ${formatInputDate(new Date())}`,
        20,
        40
      );

      let yPosition = 60;
      tasks_.forEach((task: any) => {
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
    } else {
      alert(
        "There are no tasks active! Either wait until one appears or create one"
      );
    }
  };

  const generateMultiViewPDF = async (alltasks: any) => {
    await fetchTasks();
    exportTasksToPDF(alltasks);
  };

  return (
    <>
      <UI.AuthHeaderProfileAndLogout />
      <UI.Section class_name={"user-dashboard view-all-tasks"}>
        <UI.Section class_name={"welcome-text container"}>
          {userAccountInfo && userAccountInfo ? (
            userAccountInfo.map((info: any) => {
              return (
                <>
                  <UI.HeadingTwo
                    class_name="heading-two"
                    children={`Hello ${info.username}, welcome to your Task Management System dashboard!`}
                  />
                </>
              );
            })
          ) : (
            <UI.Paragraph
              class_name={"paragraph"}
              text={"Something broke..."}
            />
          )}
        </UI.Section>
        <UI.Section class_name={"table-wrapper"}>
          <UI.Div class_name={"task-management-heading-container"}>
            <UI.HeadingOne
              class_name={"heading-one"}
              text={"Active Tasks - Multi View Mode"}
            />
          </UI.Div>
          <UI.Section class_name={"text-route container"}>
            <UI.Section class_name={"text-route"}>
              <UI.HeadingTwo
                class_name={"heading-two"}
                children={"Task Manager"}
              />
              <UI.Button class_name={"add-new-task"}>
                <UI.Route
                  class_name={"route-to-new-task"}
                  to={"/dashboard/add-new-task"}
                  text={"Add New Task"}
                />
              </UI.Button>
            </UI.Section>
            <UI.Section class_name={"pdf-button container"}>
              <UI.ButtonPDF
                class_name={"create-pdf"}
                onClick={() => {
                  generateMultiViewPDF(tasks);
                }}
                text={"Export Tasks to PDF"}
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
                {tasks.map((task: any, index: any) => {
                  return tasks && tasks !== false ? (
                    <tr key={index} className={"row"}>
                      <UI.TableData
                        class_name={"row data"}
                        children={task.taskname}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={task.taskdescription}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={task.taskstatus}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={formatInputDate(
                          new Date(task.tasktodaysdate)
                        )}
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={formatInputDate(new Date(task.taskduedate))}
                      />

                      <UI.TableData
                        class_name={"row data"}
                        children={
                          <Link
                            className={"btn view"}
                            to={`/dashboard/view-task/${task._id}`}
                            onClick={() =>
                              localStorage.setItem(
                                "taskid",
                                JSON.stringify(task._id)
                              )
                            }
                          >
                            View More
                          </Link>
                        }
                      />
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default DashboardViewAllTasks;
