import Props from "./ComponentProps";
const Label = ({ htmlFor, class_name, text }: Props) => {
  return (
    <label className={`${class_name}`} htmlFor={`${htmlFor}`}>
      {text}
    </label>
  );
};

export default Label;
