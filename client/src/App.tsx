import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/App.css";

import AppPages from "./pages/Routes";
import UI from "./components/ui-components";
function App() {
  return (
    <BrowserRouter>
      <UI.Header />
      <Routes>
        <Route path={"/"} element={<AppPages.Home />} />
        <Route path={"/register"} element={<AppPages.Register />} />
        <Route path={"/login"} element={<AppPages.Login />} />
        <Route path={"/dashboard/tasks/"} element={<AppPages.Dashboard />} />
        <Route path={"*"} element={<AppPages.NotFound />} />
      </Routes>
      <UI.Footer />
    </BrowserRouter>
  );
}

export default App;
