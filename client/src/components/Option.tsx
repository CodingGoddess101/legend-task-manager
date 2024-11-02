import Props from "./ComponentProps";
const Option = ({ class_name, value, text }: Props) => {
  return (
    <option className={`${class_name}`} value={value}>
      {text}
    </option>
  );
};

export default Option;
