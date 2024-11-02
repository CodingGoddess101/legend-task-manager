import { useEffect, useState } from "react";
import UI from "../components/ui-components";

const Dashboard_View_All_Tasks = () => {
  const [userAccountInfo, setUserAccountInfo] = useState<any>([]);
  const [tasks, setTasks] = useState<any>([]);
  useEffect(() => {
    try {
      document.title = "My Dashboard";
      fetch("http://localhost:5500/my-info", {
        credentials: "include",
        method: "GET",
      })
        .then((json_response: any) => json_response.json())
        .then((response: any) => {
          setUserAccountInfo(response);
        })
        .catch(() => console.warn("User info not found"));

      fetch("http://localhost:5500/my-tasks", {
        credentials: "include",
        method: "GET",
      })
        .then((json_response: any) => json_response.json())
        .then((response: any) => {
          setTasks(response);
        })
        .catch((err: any) => console.warn("Tasks not found: ", err.message));
      //if verification succeeds!
    } catch (err: any) {
      console.warn(err.message);
    }
  }, []);

  const generate_Multi_View_PDF = () => {
    alert("Mulit View Tasks Pdf will be created later");
  };
  return (
    <>
      <UI.Auth_Header_Profile_And_Logout />
      <UI.Section class_name={"user-dashboard view-all-tasks"}>
        <UI.Section class_name={"welcome-text container"}>
          {userAccountInfo && userAccountInfo ? (
            userAccountInfo.map((info: any) => {
              return (
                <>
                  <UI.Heading_Two
                    class_name="heading-two"
                    children={`Hello ${info.username}, welcome to your Task Management System dashboard!`}
                  />
                </>
              );
            })
          ) : (
            <UI.Paragraph class_name={"paragraph"} text={"Loading..."} />
          )}
        </UI.Section>
        <UI.Section class_name={"table-wrapper"}>
          <UI.Div class_name={"task-management-heading-container"}>
            <UI.Heading_One
              class_name={"heading-one"}
              text={"Active Tasks - Multi View Mode"}
            />
          </UI.Div>
          <UI.Section class_name={"text-route container"}>
            <UI.Section class_name={"text-route"}>
              <UI.Heading_Two
                class_name={"heading-two"}
                children={"Task Manager"}
              />
              <UI.Button class_name={"add-new-task"}>
                <UI.Route
                  class_name={"route-to-new-task"}
                  to={"/user-dashboard/add-new-task"}
                  text={"Add New Task"}
                />
              </UI.Button>
            </UI.Section>
            <UI.Section class_name={"pdf-button container"}>
              <UI.Button_PDF
                class_name={"create-pdf"}
                onClick={generate_Multi_View_PDF}
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
                {/* {tasks.map((task: any, index: any) => {
                  return tasks && tasks.length > 0 ? (
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
                        children={
                          <UI.DateFormat
                            class_name="span-task-description"
                            children={task.tasktodaysdate}
                          />
                        }
                      />
                      <UI.TableData
                        class_name={"row data"}
                        children={
                          <UI.DateFormat
                            class_name="span-task-description"
                            children={task.taskduedate}
                          />
                        }
                      />

                      <UI.TableData
                        class_name={"row data"}
                        children={
                          <UI.Route
                            class_name={"btn view"}
                            text={"View More"}
                            to={"/user-dashboard/view-task"}
                          />
                        }
                      />
                    </tr>
                  ) : ( */}
                <tr className={"row"}>
                  <UI.TableData
                    class_name={"row data"}
                    children={"Perform Hacking"}
                  />
                  <UI.TableData
                    class_name={"row data"}
                    children={
                      "Perform Hacking on a website to illustrate one proficiency on the job"
                    }
                  />
                  <UI.TableData
                    class_name={"row data"}
                    children={"In Progress"}
                  />
                  <UI.TableData
                    class_name={"row data"}
                    children={
                      <UI.DateFormat
                        class_name="span-task-description"
                        children={"10/22/2024"}
                      />
                    }
                  />
                  <UI.TableData
                    class_name={"row data"}
                    children={
                      <UI.DateFormat
                        class_name="span-task-description"
                        children={"11/08/2024"}
                      />
                    }
                  />
                  <UI.TableData
                    class_name={"row data"}
                    children={
                      <UI.Route
                        class_name={"view btn"}
                        text={"View More"}
                        to={"/user-dashboard/view-task"}
                      />
                    }
                  />
                </tr>
                {/* Below is the copy of original data flow */}
                {/* <tr className={"row"}>
                  <UI.TableData
                    class_name={"row data"}
                    children={"No Data to display"}
                  />
                </tr> */}
                {/* ); */}
                {/* })} */}
              </tbody>
            </table>
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Dashboard_View_All_Tasks;
