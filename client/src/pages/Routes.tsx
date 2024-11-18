//all files to be rendered from a single component
import Home from "./Home.tsx";
import Login from "./Login.tsx";
import FindAccount from "./AccountRecovery/FindAccount.tsx";
import Register from "./Register.tsx";
import NotFound from "./NotFound.tsx";

//Authenticated Pages
//Task Pages
import DashboardViewAllTasks from "./DashboardViewAllTasks.tsx";
import DashboardViewSingleTask from "./Tasks/DashboardViewSingleTask.tsx";
import DashboardCreateNewTask from "./Tasks/DashboardCreateNewTask.tsx";
import DashboardUpdateSingleTask from "./Tasks/DashboardUpdateSingleTask.tsx";

//User Profile Pages
import DashboardViewAccountProfile from "./UserProfiles/DashboardViewAccountProfile.tsx";
import DashboardUpdateAccountProfile from "./UserProfiles/DashboardUpdateAccountProfile.tsx";
import AccountPasswordReset from "./AccountRecovery/AccountPasswordReset.tsx";
//profile created upon registration
//404 not found
const AppPages = {
  Home,
  Register,
  Login,
  FindAccount,

  DashboardViewAllTasks,

  DashboardCreateNewTask,
  DashboardViewSingleTask,
  DashboardUpdateSingleTask,

  DashboardViewAccountProfile,
  DashboardUpdateAccountProfile,
  AccountPasswordReset,
  NotFound,
};
export default AppPages;
