import Props from "./ComponentProps";
const Button = ({ class_name, children }: Props) => {
  return <button className={`${class_name}`}>{children}</button>;
};

export default Button;
