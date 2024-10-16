import Props from "./ComponentProps";
const Label = ({ id, htmlFor, class_name, text }: Props) => {
  return (
    <label id={`${id}`} className={`${class_name}`} htmlFor={`${htmlFor}`}>
      {text}
    </label>
  );
};

export default Label;
