import Props from "./ComponentProps";
const Select = ({ id, class_name, name, onChange, children }: Props) => {
  return (
    <select
      id={`${id}`}
      className={`${class_name}`}
      name={`${name}`}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
