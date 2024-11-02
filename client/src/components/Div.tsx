import Props from "./ComponentProps";
const Div = ({ class_name, children }: Props) => {
  return <div className={`${class_name}`}>{children}</div>;
};

export default Div;
