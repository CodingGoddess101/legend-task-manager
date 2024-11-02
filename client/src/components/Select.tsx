import Props from "./ComponentProps";
const Select = ({ class_name, name, onChange, children }: Props) => {
  return (
    <select className={`${class_name}`} name={`${name}`} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
