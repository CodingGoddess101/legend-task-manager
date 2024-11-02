import Props from "./ComponentProps";
const Heading_Two = ({ class_name, children }: Props) => {
  return <h2 className={`${class_name}`}>{children}</h2>;
};
export default Heading_Two;
