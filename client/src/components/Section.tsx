import Props from "./ComponentProps";
const Section = ({ class_name, children }: Props) => {
  return <section className={`${class_name}`}>{children}</section>;
};

export default Section;
