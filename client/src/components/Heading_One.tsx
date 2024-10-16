import Props from "./ComponentProps";
const Heading_one = ({ class_name, text }: Props) => {
  return <h1 className={`${class_name}`}>{text}</h1>;
};

export default Heading_one;
