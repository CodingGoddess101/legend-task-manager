import Props from "./ComponentProps";
const Section_With_Id = ({ id, class_name, children }: Props) => {
  return (
    <section id={`${id}`} className={`${class_name}`}>
      {children}
    </section>
  );
};

export default Section_With_Id;
