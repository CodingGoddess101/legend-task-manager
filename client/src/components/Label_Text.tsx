import Props from "./ComponentProps";
//used to display form data from db
const Label_Text = ({ id, class_name, text }: Props) => {
  return (
    <p id={`${id}`} className={`${class_name}`}>
      {text}
    </p>
  );
};

export default Label_Text;
