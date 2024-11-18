import { useEffect } from "react";
import Paragraph from "../components/Paragraph";
import UI from "../components/ui-components";
import "../css/App.css";
const Home = () => {
  useEffect(() => {
    document.title = "Home page";
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);
  return (
    <>
      <UI.HeaderStandard />
      <UI.Section class_name={"home"}>
        <UI.Section class_name={"container"}>
          <UI.HeadingOne
            class_name={"heading-one"}
            text={"MERN Stack based Legend Task Management System"}
          />
        </UI.Section>
        <UI.Section class_name={"container"}>
          <UI.Section class_name={"box one"}>
            <UI.Section class_name={"p wrapper"}>
              <Paragraph
                class_name={"paragraph"}
                text="Already part of our system?"
              />
              <UI.Button class_name="button">
                <UI.Route
                  class_name="link-to-login"
                  to={"/login"}
                  text={"View Login"}
                />
              </UI.Button>
            </UI.Section>
          </UI.Section>
          <UI.Section class_name={"box two"}>
            <UI.Section class_name={"p wrapper"}>
              <Paragraph
                class_name={"paragraph"}
                text="If you cannot login in contact our support team 
                and get the issue resolved."
              />
            </UI.Section>
          </UI.Section>
          <UI.Section class_name={"box three"}>
            <UI.Section class_name={"p wrapper"}>
              <UI.Paragraph
                class_name={"paragraph"}
                text="Bright Legend Systems provides a secure Task 
                Management system to effectively communicates task 
                progress updates different company departments. 
                If you have any questions email us at 
                support@bright-legend-systems.co.za."
              />
            </UI.Section>
          </UI.Section>
        </UI.Section>
      </UI.Section>
    </>
  );
};

export default Home;
