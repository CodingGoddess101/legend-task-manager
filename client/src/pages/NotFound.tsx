import UI from "../components/ui-components";

const NotFound = () => {
  return (
    <UI.Section class_name={"notfound"}>
      <UI.Section class_name={"wrapper"}>
        <UI.Heading_One class_name={"heading-one"} text={"Page Not Found"} />
        <UI.Route
          to={"/"}
          text={"Back to Home Page>>"}
          class_name={"notfound-route"}
        />
      </UI.Section>
    </UI.Section>
  );
};

export default NotFound;
