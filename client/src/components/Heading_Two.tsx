import Props from "./ComponentProps";
const Heading_Two = ({ class_name, text }: Props) => {
  return <h2 className={`${class_name}`}>{text}</h2>;
};
export default Heading_Two;
