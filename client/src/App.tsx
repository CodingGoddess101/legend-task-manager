import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/App.css";

import AppPages from "./pages/Routes";
import UI from "./components/ui-components";
import Frontend_Auth from "./pages/Authentication/Frontend_Auth";

function App() {
  //Task routes
  const Tasks_Dashboard = Frontend_Auth(AppPages.Dashboard_View_All_Tasks);
  const Get_Single_Task = Frontend_Auth(AppPages.Dashboard_View_Single_Task);
  const Create_Task = Frontend_Auth(AppPages.Dashboard_Create_New_Task);
  const Update_Task = Frontend_Auth(AppPages.Dashboard_Update_Single_Task);

  //User Routes
  const View_User_Profile = Frontend_Auth(
    AppPages.Dashboard_View_Account_Profile
  );
  const Update_User_Profile = Frontend_Auth(
    AppPages.Dashboard_Update_Account_Profile
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppPages.Home />} />
        <Route path={"/register"} element={<AppPages.Register />} />
        <Route path={"/login"} element={<AppPages.Login />} />

        {/* Task routes below are authenticated before given access*/}
        {/* post login takes authenticated user to their dashboard and 
        display their task information*/}

        {/* Read only */}
        {/* <Route
          path={"/user-dashboard/view-tasks"}
          element={<Tasks_Dashboard />}
        /> */}

        {/* Read only*/}
        {/* <Route
          path={"/user-dashboard/view-task"}
          element={<Get_Single_Task />}
        /> */}

        {/* Write/create a task */}
        {/* <Route
          path={"/user-dashboard/add-new-task"}
          element={<Create_Task />}
        /> */}

        {/* Re-write/update task */}
        {/* <Route path={"/user-dashboard/edit-task"} element={<Update_Task />} /> */}

        {/* Read and delete only  */}
        {/* <Route path={"/user-dashboard/delete-task"} element={<Delete_Task />} /> */}

        {/*UserProfile routes */}
        {/* Read only*/}
        {/* <Route
          path={"/user-dashboard/view-my-account-profile"}
          element={<View_User_Profile />}
        /> */}

        {/* re-write/update user account data  */}
        {/* <Route
          path={"/user-dashboard/edit-my-account-profile"}
          element={<Update_User_Profile />}
        /> */}

        {/* Read only  */}
        {/* <Route
          path={"/user-dashboard/delete-my-account-profile"}
          element={<Delete_User_Profile />}
        /> */}

        {/* FOR TESTING */}
        {/* Read only */}
        <Route
          path={"/user-dashboard/view-tasks"}
          element={<AppPages.Dashboard_View_All_Tasks />}
        />

        {/* Read only*/}
        <Route
          path={"/user-dashboard/view-task"}
          element={<AppPages.Dashboard_View_Single_Task />}
        />

        {/* Write/create a task */}
        <Route
          path={"/user-dashboard/add-new-task"}
          element={<AppPages.Dashboard_Create_New_Task />}
        />

        {/* Re-write/update task */}
        <Route
          path={"/user-dashboard/update-task"}
          element={<AppPages.Dashboard_Update_Single_Task />}
        />

        {/*UserProfile routes */}
        {/* Read only*/}
        <Route
          path={"/user-dashboard/view-my-account-profile"}
          element={<AppPages.Dashboard_View_Account_Profile />}
        />

        {/* re-write/update user account data  */}
        <Route
          path={"/user-dashboard/update-my-account-profile"}
          element={<AppPages.Dashboard_Update_Account_Profile />}
        />

        {/* Read only  */}
        <Route
          path={"/user-dashboard/delete-my-account-profile"}
          element={<AppPages.Dashboard_Delete_Account_Profile />}
        />
        <Route path={"*"} element={<AppPages.NotFound />} />
      </Routes>
      <UI.Footer />
    </BrowserRouter>
  );
}

export default App;
