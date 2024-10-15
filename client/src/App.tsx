import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/App.css";
import AppPages from "./pages/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppPages.Home />} />
        <Route path={"/login"} element={<AppPages.Login />} />
        <Route path={"/task:id/dashboard"} element={<AppPages.Dashboard />} />
        <Route path={"*"} element={<AppPages.NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
