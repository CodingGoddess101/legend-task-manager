import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";

import AppPages from "./pages/Routes";
import UI from "./components/ui-components";
import ProtectedRoute from "./components/Authentication/Authentication";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppPages.Home />} />
        <Route path={"/register"} element={<AppPages.Register />} />
        <Route path={"/login"} element={<AppPages.Login />} />
        <Route
          path={"/login/account-recovery"}
          element={<AppPages.FindAccount />}
        />
        <Route
          path="/account-update-password/:id"
          element={<AppPages.AccountPasswordReset />}
        />

        {/* Task routes*/}
        <Route
          path={"/dashboard/view-tasks"}
          element={
            <ProtectedRoute element={<AppPages.DashboardViewAllTasks />} />
          }
        />
        <Route
          path={"/dashboard/view-task/:id"}
          element={
            <ProtectedRoute element={<AppPages.DashboardViewSingleTask />} />
          }
        />
        <Route
          path={"/dashboard/add-new-task"}
          element={
            <ProtectedRoute element={<AppPages.DashboardCreateNewTask />} />
          }
        />
        <Route
          path={"/dashboard/update-task/:id"}
          element={
            <ProtectedRoute element={<AppPages.DashboardUpdateSingleTask />} />
          }
        />

        {/*UserProfile routes */}
        <Route
          path={"/dashboard/view-my-account-profile/:id"}
          element={
            <ProtectedRoute
              element={<AppPages.DashboardViewAccountProfile />}
            />
          }
        />
        <Route
          path={"/dashboard/update-my-account-profile/:id"}
          element={
            <ProtectedRoute
              element={<AppPages.DashboardUpdateAccountProfile />}
            />
          }
        />
        <Route path={"*"} element={<AppPages.NotFound />} />
      </Routes>
      <UI.Footer />
    </BrowserRouter>
  );
}

export default App;
