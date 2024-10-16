import Props from "./ComponentProps";
const Paragraph = ({ class_name, text }: Props) => {
  return <p className={`${class_name}`}>{text}</p>;
};

export default Paragraph;
