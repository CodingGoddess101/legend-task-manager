//all files to be rendered from a single component
import Home from "./Home.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import NotFound from "./NotFound.tsx";

//Authenticated Pages
//Task Pages
import Dashboard_View_All_Tasks from "./Dashboard_View_All_Tasks.tsx";
import Dashboard_View_Single_Task from "./Tasks/Dashboard_View_Single_Task.tsx";
import Dashboard_Create_New_Task from "./Tasks/Dashboard_Create_New_Task.tsx";
import Dashboard_Update_Single_Task from "./Tasks/Dashboard_Update_Single_Task.tsx";

//User Profile Pages
import Dashboard_View_Account_Profile from "./UserProfiles/Dashboard_View_Account_Profile.tsx";
import Dashboard_Delete_Account_Profile from "./UserProfiles/Dashboard_Delete_Account_Profile.tsx";
import Dashboard_Update_Account_Profile from "./UserProfiles/Dashboard_Update_Account_Profile.tsx";
//profile created upon registration
//404 not found
const AppPages = {
  Home,
  Register,
  Login,

  Dashboard_View_All_Tasks,

  Dashboard_Create_New_Task,
  Dashboard_View_Single_Task,
  Dashboard_Update_Single_Task,

  Dashboard_View_Account_Profile,
  Dashboard_Update_Account_Profile,
  Dashboard_Delete_Account_Profile,
  NotFound,
};
export default AppPages;
