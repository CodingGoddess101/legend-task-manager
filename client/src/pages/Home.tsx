import Paragraph from "../components/Paragraph";
import UI from "../components/ui-components";
import "../css/App.css";

const Home = () => {
  return (
    <UI.Section class_name={"home"}>
      <UI.Section class_name={"container"}>
        <UI.Heading_One
          class_name={"heading-one"}
          text={"MERN Stack based Task Management System"}
        />
      </UI.Section>
      <UI.Section class_name={"container"}>
        <UI.Section class_name={"box one"}>
          <UI.Section class_name={"sub container"}>
            <UI.Section class_name={"p wrapper"}>
              <Paragraph
                class_name={"paragraph"}
                text="Already part of our system?"
              />

              <UI.Button class_name="button">
                <UI.Route to={"/login"} text={"View Login>>"} />
              </UI.Button>
            </UI.Section>

            <UI.Section class_name={"p wrapper"}>
              <Paragraph
                class_name={"paragraph"}
                text="If you cannot login, contact our support team and get the issue resolved."
              />
              <Paragraph
                class_name={"paragraph"}
                text="support@brightlengendesystems.co.za"
              />
            </UI.Section>
          </UI.Section>
        </UI.Section>
        <UI.Section class_name={"box two"}>
          <UI.Paragraph
            class_name={"paragraph"}
            text="Bright Legend Systems provides a secure system to 
            management tasks across different company departments."
          />
        </UI.Section>
      </UI.Section>
    </UI.Section>
  );
};

export default Home;
