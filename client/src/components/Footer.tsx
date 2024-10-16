import UI from "./ui-components";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <UI.Paragraph
        class_name={"paragraph"}
        text={`Powered by Bright Legend Systems LTD | ${date.getFullYear()}`}
      />
    </footer>
  );
};

export default Footer;
