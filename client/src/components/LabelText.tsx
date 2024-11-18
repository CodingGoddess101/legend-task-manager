import Props from "./ComponentProps";
//used to display form data from db
const LabelText = ({ id, class_name, text }: Props) => {
  return (
    <p id={`${id}`} className={`${class_name}`}>
      {text}
    </p>
  );
};

export default LabelText;
