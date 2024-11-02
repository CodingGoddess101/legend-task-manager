import { useEffect } from "react";
import UI from "../../components/ui-components.tsx";

const Dashboard_View_Single_Task = () => {
  useEffect(() => {
    document.title = "Single Task View";
    setTimeout(() => {
      // fetch("http://localhost:5500/view-profile-info", {
      //   credentials: "include",
      //   method: "GET",
      // })
      //   .then((json_response: any) => json_response.json())
      //   .then((response: any) => {
      //     // setUserAccountInfo(response);
      //   })
      //   .catch(() => console.warn("Username not found"));
    }, 1500);
  }, []);
  const generate_Single_View_PDF = () => {
    alert("Mulit View Tasks Pdf will be created later");
  };
  return (
    <>
      <UI.Auth_Header_Logout />
      <UI.Section class_name={"user-dashboard view-task"}>
        <UI.Section class_name={"table-wrapper"}>
          <UI.Div class_name={"task-management-heading-2nd-container"}>
            <UI.Route
              class_name={"to-multi-view-mode"}
              text={"Back to Multi View Mode"}
              to="/user-dashboard/view-tasks"
            />
            <UI.Heading_One
              class_name={"heading-one"}
              text={"Active Task - Single View Mode"}
            />
          </UI.Div>
          <UI.Section class_name={"text-route container"}>
            <UI.Section class_name={"text-route"}>
              <UI.Heading_Two
                class_name={"heading-two"}
                children={"Task Manager"}
              />
            </UI.Section>
            <UI.Section class_name={"pdf-button container"}>
              <UI.Button_PDF
                class_name={"create-pdf"}
                onClick={generate_Single_View_PDF}
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
                            class_name={"view btn"}
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
                      <>
                        <UI.Route
                          class_name={"view btn"}
                          text={"Edit"}
                          to={"/user-dashboard/update-task"}
                        />
                        {" | "}
                        <UI.Route
                          class_name={"view btn"}
                          text={"Delete"}
                          to={"/user-dashboard/delete-task"}
                        />
                      </>
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

export default Dashboard_View_Single_Task;
