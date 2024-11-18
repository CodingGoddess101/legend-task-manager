import Props from "./ComponentProps";
const HeadingOne = ({ class_name, text }: Props) => {
  return <h1 className={`${class_name}`}>{text}</h1>;
};

export default HeadingOne;
