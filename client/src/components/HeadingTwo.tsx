import Props from "./ComponentProps";
const HeadingTwo = ({ class_name, children }: Props) => {
  return <h2 className={`${class_name}`}>{children}</h2>;
};
export default HeadingTwo;
